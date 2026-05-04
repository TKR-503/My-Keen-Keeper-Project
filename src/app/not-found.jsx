import Link from "next/link";
import { Home, Frown } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <div className="w-20 h-20 bg-[#4ade80]/10 border border-[#4ade80]/20 rounded-2xl flex items-center justify-center mb-6">
                <Frown size={36} className="text-[#4ade80]" />
            </div>

            <div className="text-[#0eb149] font-display text-8xl font-bold mb-2 opacity-20 select-none">
                404
            </div>

            <h1 className="font-display text-3xl font-semibold text-white mb-3 -mt-6">
                Page Not Found
            </h1>
            <p className="text-gray-400 text-sm max-w-sm mb-8 leading-relaxed">
                This page doesn&apos;t exist. Maybe the friendship faded before we could track it.
            </p>

            <Link
                href="/"
                className="inline-flex items-center gap-2.5 bg-[#4ade80] hover:bg-[#22c55e] text-[#111a14] font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 text-sm"
            >
                <Home size={16} />
                Back to Home
            </Link>
        </div>
    );
}
