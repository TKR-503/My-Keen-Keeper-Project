'use client'
import FriendCard from "@/components/FriendCard";
import AddFriendModal from "@/components/AddFriendModal";
import { useState } from "react";
import friends from "@/data/friends.json";

const HomePage = () => {

    const [showModal, setShowModal] = useState(false);


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <section className="text-center pt-16 pb-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-3 leading-tight">
                    Friends to keep close in your life
                </h1>

                <p className="text-gray-500 text-sm sm:text-base max-w-sm sm:max-w-md md:max-w-lg mx-auto mb-6">
                    Your personal sheet of meaningful connections. Grow, tend, and nurture
                    the relationships that matter most.
                </p>

                <button
                    onClick={() => setShowModal(true)}
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md text-sm font-medium shadow-sm"
                >
                    + Add a Friend
                </button>

                <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Friends</h2>
                <div className="bg-gray-100 rounded-lg m-12 text-center border border-gray-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {
                            friends.map(friend => <FriendCard key={friend.id} friend={friend}
                            />)
                        }
                    </div>
                </div>
            </section>

            {showModal && <AddFriendModal onClose={() => setShowModal(false)} />}

        </div>
    );
};

export default HomePage;