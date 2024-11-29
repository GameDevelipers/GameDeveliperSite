import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-600 to-blue-400 text-white">
      <h1 className="text-4xl font-bold mb-4">GameDevelipers secure site</h1>

      <SignedIn>
        <p className="text-lg mb-4">You are signed in</p>
        <Link href="/dashboard">
          <button className="bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600">
            Go to Dashboard
          </button>
        </Link>
      </SignedIn>

      <SignedOut>
        <p className="text-lg mb-4">Please sign in to access</p>
        <Link href="/sign-in">
          <button className="bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600">
            Sign In
          </button>
        </Link>
      </SignedOut>
    </div>
  );
}
