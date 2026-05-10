import Image from "next/image";
import NotFound from "../../not-found";
import { AlarmClockCheck, Package, Trash2 } from "lucide-react";
import QuickCheckIn from "@/components/QuickCheckIn";


const statusConfig = {
    "overdue": { bg: "bg-red-100", text: "text-red-600", label: "Overdue" },
    "almost due": { bg: "bg-amber-100", text: "text-amber-600", label: "Almost Due" },
    "on-track": { bg: "bg-green-100", text: "text-green-600", label: "On Track" },
};

const FriendDetailPage = async ({ params }) => {
    const { friendId } = await params;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/data/friends.json`, { cache: "no-store" });
    const friendsData = await res.json();

    const friend = friendsData.find((f) => String(f.id) === String(friendId));


    if (!friend) return <NotFound />;

    const sc = statusConfig[friend.status] ?? statusConfig["on-track"];
    const nextDue = new Date(friend.next_due_date).toLocaleDateString("en-US", {
        month: "short", day: "numeric", year: "numeric",
    });

    return (


        <div className="p-4 sm:p-6 bg-gray-100 min-h-screen flex items-start sm:items-center justify-center">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-4 sm:p-6 border border-gray-200">


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* ════ LEFT COLUMN ════ */}
                    <div className="flex flex-col items-center text-center lg:border-r lg:pr-6">

                        {/* avatar */}
                        <Image
                            src={friend.picture}
                            alt={friend.name}
                            width={100}
                            height={100}
                            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover ring-4 ring-white shadow mb-4"
                        />

                        {/* name */}
                        <h2 className="font-bold text-gray-800 text-lg sm:text-xl">{friend.name}</h2>

                        {/* status */}
                        <span className={`${sc.bg} ${sc.text} text-xs px-3 py-1 rounded-full mt-2 font-medium`}>
                            {sc.label}
                        </span>

                        {/* tags */}
                        <div className="flex flex-wrap justify-center gap-1.5 mt-2">
                            {friend.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full uppercase font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* bio */}
                        <p className="text-gray-500 text-sm mt-3 italic max-w-xs">
                            &ldquo;{friend.bio.split(".")[0]}.&rdquo;
                        </p>

                        {/* email */}
                        <p className="text-gray-400 text-xs mt-2">
                            Preferred:{" "}
                            <span className="text-gray-600 break-all">{friend.email}</span>
                        </p>

                        <div className="w-full mt-5 grid grid-cols-3 gap-2 sm:grid-cols-1 sm:space-y-0 sm:gap-2">
                            <button className="border rounded-md py-2 px-2 text-xs sm:text-sm hover:bg-gray-100 transition-colors text-center">
                                <AlarmClockCheck className="inline-block mr-1" /> <span className="hidden sm:inline">Snooze </span>
                            </button>
                            <button className="border rounded-md py-2 px-2 text-xs sm:text-sm hover:bg-gray-100 transition-colors text-center">
                                <Package className="inline-block mr-1" /> <span className="hidden sm:inline">Archive</span>
                                <span className="sm:hidden">Save</span>
                            </button>
                            <button className="text-red-500 border border-red-200 rounded-md py-2 px-2 text-xs sm:text-sm hover:bg-red-50 transition-colors text-center">
                                <Trash2 className="inline-block mr-1" /><span className="hidden sm:inline">Delete</span>
                            </button>
                        </div>
                    </div>


                    <div className="lg:gap-9 sm:col-span-2 flex flex-col gap-9">


                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="bg-gray-50 rounded-lg p-4 text-center border">
                                <h3 className="text-2xl font-bold text-gray-800">{friend.days_since_contact}</h3>
                                <p className="text-sm text-gray-500">Days Since Contact</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4 text-center border">
                                <h3 className="text-2xl font-bold text-gray-800">{friend.goal}</h3>
                                <p className="text-sm text-gray-500">Goal (Days)</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4 text-center border">
                                <h3 className="text-lg font-bold text-gray-800">{nextDue}</h3>
                                <p className="text-sm text-gray-500">Next Due</p>
                            </div>
                        </div>

                        {/* relationship goal */}
                        <div className="bg-gray-50 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border">
                            <div>
                                <h4 className="font-medium text-gray-800">Relationship Goal</h4>
                                <p className="text-sm text-gray-500 mt-0.5">
                                    Connect every{" "}
                                    <span className="font-semibold text-gray-800">{friend.goal} days</span>
                                </p>
                            </div>
                            <button className="self-start sm:self-auto text-sm border px-4 py-1.5 rounded hover:bg-gray-100 transition-colors whitespace-nowrap">
                                Edit
                            </button>
                        </div>


                        {/* Quick Check-In */}
                      

                            <QuickCheckIn
                                friendId={friend.id}
                                friendName={friend.name}
                            />
                      

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetailPage;