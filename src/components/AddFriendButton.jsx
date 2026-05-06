"use client";

import { useState } from "react";
import AddFriendModal from "@/components/AddFriendModal";

export default function AddFriendButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md text-sm font-medium shadow-sm"
      >
        + Add a Friend
      </button>

      {showModal && <AddFriendModal onClose={() => setShowModal(false)} />}
    </>
  );
}