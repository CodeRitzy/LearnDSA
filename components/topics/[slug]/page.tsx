import { notFound } from "next/navigation";
import ProblemCard from "@/components/topics/ProblemCard";
import { problems, topics } from "@/lib/data";
import { isProblemComplete } from "@/lib/progress";

type TopicDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function TopicDetailPage({
  params,
}: TopicDetailPageProps) {
  const { slug } = await params;

  const topic = topics.find((item) => item.slug === slug);

  if (!topic) {
    notFound();
  }

  const topicProblems = problems.filter((problem) => problem.topicSlug === slug);

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{topic.title}</h1>
        <p className="mt-2 text-gray-600">{topic.description}</p>
      </div>

      <div className="space-y-4">
        {topicProblems.map((problem) => (
          <ProblemCard
            key={problem.id}
            problem={problem}
            completed={isProblemComplete(problem.id)}
          />
        ))}
      </div>
    </main>
  );
}