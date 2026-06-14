type InfoCardProps = {
    children: React.ReactNode;
};

export default function InfoCard({ children }: InfoCardProps) {
    return (
        <div className="flex flex-1 w-3/4 max-w-5xl flex-col items-center justify-between py-32 px-16 bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl mt-10 mb-5 text-center dark:bg-zinc-900/20 dark:border-zinc-700/40">
            {children}
        </div>
    );
}