
import FriendCard from "@/components/FriendCard";
import AddFriendModal from "@/components/AddFriendModal";
import FriendPage from "./friends/page";
import Link from "next/link";
import AddFriendButton from "@/components/AddFriendButton";



const HomePage = () => {

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

               {/* Stats Cards */}

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10 mb-6">
                    <div className="bg-white rounded-lg shadow-sm  p-4 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800">8</h3>
                        <p className="text-gray-500 text-sm">Total Friends</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-4 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800">3</h3>
                        <p className="text-gray-500 text-sm">On Track</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-4 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800">6</h3>
                        <p className="text-gray-500 text-sm">Need Attention</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-4 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800">12</h3>
                        <p className="text-gray-500 text-sm">Interactions This Month</p>
                    </div>
                </div>

                <AddFriendButton />
                <FriendPage />

            </section>

            

        </div>
    );
};

export default HomePage;