"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Dialog } from "../../components/ui/dialog";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <main className="relative min-h-screen flex flex-col">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-bgMove"></div>

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">StudyBuddy</h1>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
        <Button className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-lg">
          Menu
        </Button>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center flex-grow text-center px-4">
        <div className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md">
          <h1 className="text-5xl font-bold text-blue-600">StudyBuddy</h1>
          <p className="text-gray-700 mt-4">
            Find the perfect study partner or tutor to ace your courses.
          </p>
          <div className="mt-6">
            <Button
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg"
              onClick={() => {
                console.log("Opening modal...");
                setShowModal(true);
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Sign-Up/Login Modal */}
      <Dialog
        open={showModal}
        onOpenChange={setShowModal}
        isSignUp={isSignUp}
        setIsSignUp={setIsSignUp}
      />

      {/* Animation Styling */}
      <style jsx>{`
        @keyframes bgMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-bgMove {
          background-size: 200% 200%;
          animation: bgMove 10s infinite alternate ease-in-out;
        }
      `}</style>
    </main>
  );
}
