import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
      <SignIn path="/sign-in" routing="path" />
    </div>
  );
}
