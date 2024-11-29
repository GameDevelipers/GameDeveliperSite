import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>GameDevelipers Secure Site</h1>
      <SignedIn>
        <p>Signed in</p>
      </SignedIn>
      <SignedOut>
        <p>Please sign in to access.</p>
        <Link href="/sign-in">
          <button>Sign In</button>
        </Link>
      </SignedOut>
    </div>
  );
}
