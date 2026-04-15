import Link from "next/link";
import { Show, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b px-6 py-4">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-lg font-semibold">
          LearnDSA
        </Link>
        <Link href="/topics">Topics</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>

      <div className="flex items-center gap-4">
        <Show when="signed-out">
          <Link href="/sign-in" className="rounded border px-4 py-2">
            Sign In
          </Link>
          <Link href="/sign-up" className="rounded border px-4 py-2">
            Sign Up
          </Link>
        </Show>

        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </nav>
  );
}