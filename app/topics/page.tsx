import Link from "next/link";
import { prisma } from "../../lib/prisma";

export default async function TopicsPage() {
  const topics = await prisma.topic.findMany({
    orderBy: { title: "asc" },
  });

  return (
    <main className="p-8">
      <h1 className="mb-6 text-3xl font-bold">Topics</h1>

      <div className="space-y-4">
        {topics.map((topic) => (
          <div key={topic.id} className="rounded-lg border p-4">
            <h2 className="text-xl font-semibold">{topic.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{topic.description}</p>
            <Link
              href={`/topics/${topic.slug}`}
              className="mt-3 inline-block text-blue-600 underline"
            >
              View topic
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}