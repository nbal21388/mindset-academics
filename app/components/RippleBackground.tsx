"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";

export default function RippleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current!;
    if (!c) return;

    const ctx = c.getContext("2d")!;
    if (!ctx) return;

    let cH: number;
    let cW: number;
    let bgColor = "#0d4570";
    const animations: any[] = [];

    const colorPicker = (() => {
      const colors = ["#0d4570", "#700d29", "#0d7040", "#260d70"];
      let index = 0;

      return {
        next() {
          index = index < colors.length - 1 ? index + 1 : 0;
          return colors[index];
        },
        current() {
          return colors[index];
        },
      };
    })();

    function removeAnimation(animation: any) {
      const index = animations.indexOf(animation);
      if (index > -1) animations.splice(index, 1);
    }

    function calcPageFillRadius(x: number, y: number) {
      const l = Math.max(x, cW - x);
      const h = Math.max(y, cH - y);
      return Math.sqrt(l * l + h * h);
    }

    class Circle {
      x!: number;
      y!: number;
      r!: number;
      fill?: string;
      opacity?: number;
      stroke?: {
        width: number;
        color: string;
      };

      constructor(opts: any) {
        Object.assign(this, opts);
      }

      draw() {
        ctx.globalAlpha = this.opacity || 1;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);

        if (this.stroke) {
          ctx.strokeStyle = this.stroke.color;
          ctx.lineWidth = this.stroke.width;
          ctx.stroke();
        }

        if (this.fill) {
          ctx.fillStyle = this.fill;
          ctx.fill();
        }

        ctx.closePath();
        ctx.globalAlpha = 1;
      }
    }

    function handleEvent(e: MouseEvent) {
      const currentColor = colorPicker.current();
      const nextColor = colorPicker.next();

      const targetR = calcPageFillRadius(e.pageX, e.pageY);
      const rippleSize = Math.min(200, cW * 0.4);

      const pageFill = new Circle({
        x: e.pageX,
        y: e.pageY,
        r: 0,
        fill: nextColor,
      });

      const fillAnimation = anime({
        targets: pageFill,
        r: targetR,
        easing: "easeOutQuart",
        duration: Math.max(targetR / 2, 750),
        complete: () => {
          bgColor = pageFill.fill!;
          removeAnimation(fillAnimation);
        },
      });

      const ripple = new Circle({
        x: e.pageX,
        y: e.pageY,
        r: 0,
        fill: currentColor,
        opacity: 1,
        stroke: {
          width: 3,
          color: currentColor,
        },
      });

      const rippleAnimation = anime({
        targets: ripple,
        r: rippleSize,
        opacity: 0,
        easing: "easeOutExpo",
        duration: 900,
        complete: () => removeAnimation(rippleAnimation),
      });

      animations.push(fillAnimation, rippleAnimation);
    }

    function resizeCanvas() {
      cW = window.innerWidth;
      cH = window.innerHeight;

      c.width = cW * window.devicePixelRatio;
      c.height = cH * window.devicePixelRatio;

      c.style.width = `${cW}px`;
      c.style.height = `${cH}px`;

      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    resizeCanvas();

    const renderLoop = anime({
      duration: Infinity,
      update: () => {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, cW, cH);

        animations.forEach((anim: any) => {
          anim.animatables.forEach((a: any) => {
            a.target.draw();
          });
        });
      },
    });

    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("mousedown", handleEvent);

    return () => {
      renderLoop.pause();
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousedown", handleEvent);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
    />
  );
}