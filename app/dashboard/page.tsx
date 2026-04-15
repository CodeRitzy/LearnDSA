import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-3">You are signed in to LearnDSA.</p>

      <div className="mt-6 rounded-lg border p-4">
        <h2 className="text-xl font-semibold">Welcome back</h2>
        <p className="mt-2 text-sm text-gray-600">
          This is your protected dashboard. Later, this page can show:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-sm">
          <li>topics you have started</li>
          <li>reviews due today</li>
          <li>progress and mastery</li>
          <li>recommended next topic</li>
        </ul>
      </div>
    </main>
  );
}