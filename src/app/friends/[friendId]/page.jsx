import React from 'react';


const FriendDetailPage =  () => {

 

    // Find the friend by ID
  

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
            {/* Card */}
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-6 grid grid-cols-3 gap-6 border border-gray-200">

                {/* Left Section */}
                <div className="flex flex-col items-center text-center border-r pr-4">
                    {/* <img
                        src="/mnt/data/f04af439-81b8-4ece-b7af-561f59b3654b.png"
                        alt="profile"
                        className="w-20 h-20 rounded-full object-cover mb-3"
                    /> */}
                    <h2 className=" font-semibold">John Doe</h2>

                    <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full mt-1">
                        Overdue
                    </span>

                    <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full mt-1">
                        FAMILY
                    </span>

                    <p className="text-gray-500 text-sm mt-2 italic">
                        Former colleague, great 
                    </p>

                    <p className="text-gray-400 text-xs mt-1">
                        Preferred: 
                    </p>

                    <div className="w-full mt-4 space-y-2">
                        <button className="w-full border rounded-md py-2 text-sm hover:bg-gray-50">
                            Snooze 2 Weeks
                        </button>
                        <button className="w-full border rounded-md py-2 text-sm hover:bg-gray-50">
                            Archive
                        </button>
                        <button className="w-full text-red-500 border rounded-md py-2 text-sm hover:bg-red-50">
                            Delete
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-span-2 space-y-4">

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                            <h3 className="text-xl font-semibold">62</h3>
                            <p className="text-sm text-gray-500">Days Since Contact</p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                            <h3 className="text-xl font-semibold">30</h3>
                            <p className="text-sm text-gray-500">Goal (Days)</p>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                            <h3 className="text-lg font-semibold">Feb 27, 2026</h3>
                            <p className="text-sm text-gray-500">Next Due</p>
                        </div>
                    </div>

                    {/* Relationship Goal */}
                    <div className="bg-gray-50 rounded-lg p-4 flex justify-between items-center">
                        <div>
                            <h4 className="font-medium">Relationship Goal</h4>
                            <p className="text-sm text-gray-500">
                                Connect every <span className="font-semibold">30 days</span>
                            </p>
                        </div>
                        <button className="text-sm border px-3 py-1 rounded hover:bg-gray-100">
                            Edit
                        </button>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium mb-3">Quick Check-In</h4>

                        <div className="grid grid-cols-3 gap-3">
                            <button className="border rounded-lg p-4 flex flex-col items-center hover:bg-gray-100">
                                📞 Call
                            </button>

                            <button className="border rounded-lg p-4 flex flex-col items-center hover:bg-gray-100">
                                💬 Text
                            </button>

                            <button className="border rounded-lg p-4 flex flex-col items-center hover:bg-gray-100">
                                🎥 Video
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendDetailPage;