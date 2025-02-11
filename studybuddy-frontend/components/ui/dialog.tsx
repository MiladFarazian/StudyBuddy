import React, { useEffect, useState } from "react";
import Modal from "react-modal";

export function Dialog({
  open,
  onOpenChange,
  isSignUp,
  setIsSignUp,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isSignUp: boolean;
  setIsSignUp: (value: boolean) => void;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      Modal.setAppElement(document.body);
    }
  }, []);

  if (!isClient) return null;

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => onOpenChange(false)}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          {isSignUp ? "Sign Up" : "Log In"}
        </h2>
        <form className="mt-4 space-y-3">
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
          />
          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border rounded"
            />
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            {isSignUp ? "Create Account" : "Log In"}
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            className="text-blue-600 font-semibold ml-4"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Log In" : "Sign Up"}
          </button>
        </p>
      </div>
    </Modal>
  );
}
