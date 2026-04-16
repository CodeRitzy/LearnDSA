import Link from "next/link";
import { Topic } from "@/lib/data";

export default function TopicCard({ topic }: { topic: Topic }) {
  return (
    <Link
      href={`/topics/${topic.slug}`}
      className="block rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <h2 className="text-lg font-semibold text-gray-900">{topic.title}</h2>
      <p className="mt-2 text-sm text-gray-600">{topic.description}</p>
    </Link>
  );
}