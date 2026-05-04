'use client'
import FriendCard from "@/components/FriendCard";
import AddFriendModal from "@/components/AddFriendModal";
import { useState } from "react";

const HomePage = () => {
 
  const [showModal, setShowModal] = useState(false);

return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="text-center pt-16 pb-10">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">
          Friends to keep close in your life
        </h1>
        <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
          Your personal sheet of meaningful connections. Grow, tend, and nurture
          the relationships that matter most.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md text-sm font-medium shadow-sm"
        >
          + Add a Friend
        </button>
      </section>

 {showModal && <AddFriendModal onClose={() => setShowModal(false)} />}
      
    </div>
  );
};

export default HomePage;