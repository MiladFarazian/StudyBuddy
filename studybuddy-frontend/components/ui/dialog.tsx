import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useRouter } from "next/navigation";

export function Dialog({
  open,
  onOpenChange,
  onSelectRole,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectRole: (role: "student" | "tutor") => void;
}) {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

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
        <h2 className="text-2xl font-bold">Are you a tutor or student?</h2>
        <div className="mt-6 flex justify-center gap-6">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => {
              onSelectRole("student");
              onOpenChange(false);
            }}
          >
            Student
          </button>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => {
              onSelectRole("tutor");
              onOpenChange(false);
              router.push("/get-started");
            }}
          >
            Tutor
          </button>
        </div>
      </div>
    </Modal>
  );
}
