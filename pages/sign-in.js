import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-xl animate-pulse"></div>
      
      {/* Centered Sign-In Component */}
      <div className="relative z-10">
        <SignIn path="/sign-in" routing="path" />
      </div>
    </div>
  );
}
