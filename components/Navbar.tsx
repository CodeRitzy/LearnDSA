import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center gap-6 border-b px-6 py-4">
      <Link href="/" className="font-semibold">
        LearnDSA
      </Link>
      <Link href="/topics">Topics</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/sign-up">Sign Up</Link>
    </nav>
  );
}