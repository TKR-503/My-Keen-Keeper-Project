"use client";
import Link from "next/link";
import Image from 'next/image'
import { usePathname } from "next/navigation";
import { Home, Clock, BarChart2, Heart } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/timeline", label: "Timeline", icon: Clock },
    { href: "/stats", label: "Stats", icon: BarChart2 },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-[#2d4a38]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Image src="/assets/logo.png" alt="KeenKeeper Logo" width={200} height={200} />

                    {/* Nav Links */}
                    <div className="flex items-center gap-1">
                        {navLinks.map(({ href, label, icon: Icon }) => {
                            const isActive =
                                href === "/" ? pathname === "/" : pathname.startsWith(href);
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isActive
                                            ? "bg-[#4ade80]/20 text-[#4ade80] border border-[#4ade80]/30"
                                            : "text-gray-600 hover:text-[#4ade80] hover:bg-white/5"
                                        }`}
                                >
                                    <Icon size={15} />
                                    <span className="hidden sm:inline">{label}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}
