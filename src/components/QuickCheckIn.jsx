"use client";

import Image from "next/image";
import { useTimeline } from "@/context/TimelineContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CallIcon from "@/assets/call.png";
import TextIcon from "@/assets/text.png";
import VideoIcon from "@/assets/video.png";

function createTimelineEntry(type, friendName, friendId) {
    return {
        id: Date.now(),
        type,
        title: `${type} with ${friendName}`,
        friendId,
        date: new Date().toISOString(),
    };
}

export default function QuickCheckIn({ friendId, friendName }) {
    const { addEntry } = useTimeline();

    function handleCheckIn(type) {
        const newEntry = createTimelineEntry(type, friendName, friendId);
        addEntry(newEntry);


        toast.success(`${type} logged with ${friendName}!`, {
            position: "bottom-right",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    }

    const buttons = [
        { type: "Call", icon: CallIcon },
        { type: "Text", icon: TextIcon },
        { type: "Video", icon: VideoIcon },
    ];

    return (
        <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border">
            <h4 className="font-medium mb-3 text-gray-800 text-sm sm:text-base">
                Quick Check-In
            </h4>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {buttons.map(({ type, icon }) => (
                    <button
                        key={type}
                        onClick={() => handleCheckIn(type)}
                        className="w-full border rounded-lg py-2 sm:py-4
              flex flex-col items-center gap-1 sm:gap-2
              hover:bg-green-100 hover:border-green-300
              active:scale-95 active:bg-green-200
              transition-all duration-150 cursor-pointer
              select-none"
                    >
                        <Image
                            src={icon}
                            alt={type}
                            width={20}
                            height={20}
                            className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                        <span className="text-[10px] sm:text-sm font-medium text-gray-700">
                            {type}
                        </span>
                    </button>
                ))}
            </div>

           <ToastContainer />
        </div>
    );
}