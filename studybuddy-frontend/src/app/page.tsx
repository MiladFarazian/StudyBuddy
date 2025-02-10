"use client";

import { Button } from "../../components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-10 text-center w-full h-2/3 flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-blue-600">StudyBuddy</h1>
        <p className="text-gray-700 mt-4">Find the perfect study partner or tutor to ace your courses.</p>
        
        <div className="mt-6 space-y-4">
          <Button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg" onClick={() => router.push("/get-started")}>Get Started</Button>
        </div>
      </div>
    </main>
  );
}

