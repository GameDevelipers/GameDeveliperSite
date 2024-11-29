import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-xl animate-pulse"></div>
      
      {/* Content Container */}
      <div className="relative z-10 p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4"></h2>
        <p className="text-center text-gray-600 mb-6">Welcome back! Please sign in to continue.</p>
        <SignIn path="/sign-in" routing="path" />
      </div>
    </div>
  );
}
