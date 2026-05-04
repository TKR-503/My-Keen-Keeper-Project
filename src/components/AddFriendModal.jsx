"use client";
import { X, UserPlus } from "lucide-react";

export default function AddFriendModal({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-[#1a2e22] border border-[#2d4a38] rounded-2xl p-8 w-full max-w-md shadow-2xl animate-slide-up">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <X size={18} />
                </button>

                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#4ade80]/20 rounded-xl flex items-center justify-center">
                        <UserPlus size={18} className="text-[#4ade80]" />
                    </div>
                    <h2 className="font-display text-xl font-semibold text-white">Add a Friend</h2>
                </div>

                <div className="space-y-4">
                    {["Full Name", "Email", "Tags (e.g. college, work)"].map((placeholder) => (
                        <input
                            key={placeholder}
                            type="text"
                            placeholder={placeholder}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#4ade80]/50 focus:bg-white/8 transition-all"
                        />
                    ))}
                    <input
                        type="number"
                        placeholder="Contact goal (days)"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#4ade80]/50 transition-all"
                    />
                </div>

                <div className="flex gap-3 mt-6">
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/20 text-sm font-medium transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onClose}
                        className="flex-1 px-4 py-3 rounded-xl bg-[#4ade80] hover:bg-[#22c55e] text-[#111a14] font-semibold text-sm transition-all"
                    >
                        Add Friend
                    </button>
                </div>
            </div>
        </div>
    );
}
