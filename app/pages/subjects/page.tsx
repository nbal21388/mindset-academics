
import InfoCard from "@/app/components/InfoCard";
import NavBar from "@/app/components/NavBar";
import RippleBackground from "@/app/components/RippleBackground";
import Link from "next/link";

const subjectsData = {
  maths: {
    title: "Maths",
    tag: "Core Subject",
    tagColor: "#4A90D9",
    summary: "From GCSE to A-Level, we help students build confidence and master key concepts.",
    levels: ["KS3", "GCSE", "A-Level"],
    examBoards: ["AQA", "Edexcel", "OCR"],
  },
  english: {
    title: "English",
    tag: "Core Subject",
    tagColor: "#e5af8f",
    summary: "Improving reading, writing and analysis skills at every level.",
    levels: ["KS3", "GCSE", "A-Level"],
    examBoards: ["AQA", "Edexcel", "OCR"],
  },
  biology: {
    title: "Biology",
    tag: "Core Subject",
    tagColor: "#4CAF50",
    summary: "Biology tutoring tailored to your exam board.",
    levels: ["KS3", "GCSE", "A-Level"],
    examBoards: ["AQA", "Edexcel", "OCR"],
  },
  chemistry: {
    title: "Chemistry",
    tag: "Core Subject",
    tagColor: "#4CAF50",
    summary: "Chemistry tutoring tailored to your exam board.",
    levels: ["KS3", "GCSE", "A-Level"],
    examBoards: ["AQA", "Edexcel", "OCR"],
  },
  physics: {
    title: "Physics",
    tag: "Core Subject",
    tagColor: "#4CAF50",
    summary: "Physics tutoring tailored to your exam board.",
    levels: ["KS3", "GCSE", "A-Level"],
    examBoards: ["AQA", "Edexcel", "OCR"],
  },
  computing: {
    title: "Computing",
    tag: "Core Subject",
    tagColor: "#4c51af",
    summary: "Computing tutoring tailored to your exam board.",
    levels: ["KS3", "GCSE", "University"],
    examBoards: ["AQA", "Edexcel", "OCR"],
  },
  spanish: {
    title: "Spanish",
    tag: "Language Subject",
    tagColor: "#d7d070",
    summary: "From KS2 to GCSE, we help students build confidence and learn.",
    levels: ["KS3", "GCSE"],
    examBoards: ["AQA", "Edexcel"],
  },
  german: {
    title: "German",
    tag: "Language Subject",
    tagColor: "#d7d070",
    summary: "From KS3 to GCSE, we help students build confidence and learn.",
    levels: ["KS3", "GCSE"],
    examBoards: ["AQA", "Edexcel"],
  }
};

export default function Subjects() {
  return (
    <div className="relative z-10 flex flex-col flex-1 items-center justify-center font-sans">
      <NavBar />
      <h1 className="text-4xl font-bold text-center text-black dark:text-zinc-50 m-6">
        Subjects
      </h1>

      <InfoCard>
        <p className="text-lg leading-8 text-darkgrey-600 dark:text-zinc-400">
          We offer a wide range of subjects to cater to the diverse interests and academic needs of our students.
          Whether you're looking for help with homework, preparing for exams, or seeking enrichment opportunities,
          our tutors are here to support your learning journey from KS2, KS3, GCSEs, A Level or University levels.
        </p>
      </InfoCard>

      {/* Subject Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-6 max-w-5xl w-full">
        {Object.entries(subjectsData).map(([id, subject]) => (
          <Link
            key={id}
            href={`/pages/subjects/${id}`}
            className="border rounded-xl p-5 hover:shadow-md transition-shadow dark:border-white/[.145] dark:hover:bg-[#1a1a1a] hover:bg-black/[.04]"
          >
            <span
              className="text-xs font-medium border rounded-full px-2 py-0.5"
              style={{ borderColor: subject.tagColor, color: subject.tagColor }}
            >
              {subject.tag}
            </span>
            <h2 className="text-lg font-semibold mt-2 text-black dark:text-zinc-50">{subject.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{subject.summary}</p>

            {/* Levels & Exam Boards */}
            <div className="flex flex-wrap gap-2 mt-4">
              {subject.levels.map(level => (
                <span key={level} className="bg-blue-100 text-blue-700 text-xs rounded-full px-2 py-0.5">{level}</span>
              ))}
              {subject.examBoards.map(board => (
                <span key={board} className="bg-gray-100 text-gray-600 text-xs rounded-full px-2 py-0.5">{board}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}