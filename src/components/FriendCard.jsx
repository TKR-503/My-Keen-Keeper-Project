import Image from "next/image";
import Link from "next/link";


const statusStyle = {
    "overdue": "bg-orange-400 text-white",
    "almost due": "bg-amber-300 text-amber-900",
    "on-track": "bg-green-400 text-white",
};

const statusLabel = {
    "overdue": "Overdue",
    "almost due": "Almost Due",
    "on-track": "On Track",
};

const FriendCard = ({ friend }) => {
    const daysAgo = `${friend.days_since_contact}d ago`;
    const pill = statusStyle[friend.status] ?? statusStyle["on-track"];
    const label = statusLabel[friend.status] ?? "On Track";

    return (
        <Link href={`/friends/${friend.id}`} className="block">
            <div className="container mx-auto flex flex-col items-center text-center gap-2 px-4 py-5  rounded-xl bg-white hover:bg-green-200 transition-colors duration-150 cursor-pointer">

                {/* ── Avatar ── */}
                <div className=" rounded-full overflow-hidden ring-4 ring-white shadow mb-1 shrink-0">
                    <Image
                        src={friend.picture}
                        alt={friend.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                    />
                </div>


                <p className="text-gray-800 font-semibold text-sm">{friend.name}</p>

                <p className="text-gray-400 text-[11px]">{daysAgo}</p>


                <div className=" justify-center gap-1 flex flex-wrap">
                    {friend.tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-green-100 text-green-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <span className={`${pill} text-[11px] font-semibold px-4 py-0.5 rounded-full`}>
                    {label}
                </span>
            </div>
        </Link>
    );
};

export default FriendCard;
