import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-5xl font-bold">LearnDSA</h1>
      <p className="mt-4 max-w-2xl text-lg">
        Learn data structures through active recall and smart review.
      </p>

      <div className="mt-6 flex gap-4">
        <Link href="/topics" className="rounded border px-4 py-2">
          Start Learning
        </Link>
        <Link href="/dashboard" className="rounded border px-4 py-2">
          Dashboard
        </Link>
      </div>
    </main>
  );
}