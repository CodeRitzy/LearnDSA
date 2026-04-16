import Link from "next/link";
import type { Problem } from "@/lib/data";

type ProblemCardProps = {
  problem: Problem;
  completed: boolean;
};

export default function ProblemCard({
  problem,
  completed,
}: ProblemCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-gray-900">
            {problem.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600">{problem.description}</p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            completed
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {completed ? "Completed" : problem.difficulty}
        </span>
      </div>

      <div className="mt-4">
        <Link
          href={`/problems/${problem.id}`}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Open problem
        </Link>
      </div>
    </div>
  );
}