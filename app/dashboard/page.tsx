import Link from "next/link";
import ProgressOverview from "@/components/dashboard/ProgressOverview";
import { problems, topics } from "@/lib/data";
import { getCompletedCount } from "@/lib/progress";

export default function DashboardPage() {
  const completed = getCompletedCount();
  const total = problems.length;

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Track your progress and continue learning.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ProgressOverview completed={completed} total={total} />

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Topics Available</h2>
          <p className="mt-2 text-sm text-gray-600">
            You currently have {topics.length} topics ready to study.
          </p>

          <Link
            href="/topics"
            className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
          >
            Browse topics
          </Link>
        </div>
      </div>
    </main>
  );
}