import TopicCard from "@/components/topics/TopicCard";
import { topics } from "@/lib/data";

export default function TopicsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Topics</h1>
        <p className="mt-2 text-gray-600">
          Choose a topic and start practicing data structures and algorithms.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </main>
  );
}