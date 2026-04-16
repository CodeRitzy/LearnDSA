import { notFound } from "next/navigation";
import { problems } from "@/lib/data";

type ProblemPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProblemPage({ params }: ProblemPageProps) {
  const { id } = await params;

  const problem = problems.find((item) => item.id === id);

  if (!problem) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900">{problem.title}</h1>

      <div className="mt-4 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
        {problem.difficulty}
      </div>

      <p className="mt-6 text-gray-700">{problem.description}</p>

      <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Coming next</h2>
        <p className="mt-2 text-sm text-gray-600">
          Later in Phase 3, this page can hold hints, solutions, notes, and completion tracking.
        </p>
      </div>
    </main>
  );
}