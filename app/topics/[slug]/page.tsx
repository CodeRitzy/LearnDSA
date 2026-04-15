import { prisma } from "../../../lib/prisma";
import { notFound } from "next/navigation";

export default async function TopicDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const topic = await prisma.topic.findUnique({
    where: { slug: params.slug },
  });

  if (!topic) {
    notFound();
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{topic.title}</h1>
      <p className="mt-4 text-lg">{topic.description}</p>
    </main>
  );
}