import Image from 'next/image'
import useSWR from 'swr'
import Instagram from "../../public/assets/instagram.png";
import Facebook from "../../public/assets/facebook.png";
import Twitter from "../../public/assets/twitter.png";

export default function Footer() {
    const socials = [
        { icon: Instagram, href: "https://instagram.com" },
        { icon: Facebook, href: "https://facebook.com" },
        { icon: Twitter, href: "https://twitter.com" },
    ];

    return (
        <footer className="bg-[#1f3a2b] text-gray-300 mt-auto">
            <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col items-center text-center">

                {/* Brand */}
                <Image 
                    src="/assets/logo-xl.png" 
                    alt="KeenKeeper Logo" 
                    width={250} 
                    height={250} 
                    className="mb-4" 
                />

                {/* Tagline */}
                <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-6">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                {/* Social Icons */}
                <div className="flex gap-4 mb-8">
                    {socials.map(({ icon, href }, index) => (
                        <a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2b4a38] hover:bg-[#4ade80] transition-all"
                        >
                            <Image 
                                src={icon} 
                                alt="social icon" 
                                width={18} 
                                height={18} 
                                className="object-contain"
                            />
                        </a>
                    ))}
                </div>

                {/* Divider */}
                <div className="w-full border-t border-[#2d4a38] mb-6"></div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full text-xs text-gray-500 gap-3">
                    <p>
                        © {new Date().getFullYear()} KeenKeeper. All rights reserved by tawhid rafe.
                    </p>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#4ade80] transition">Privacy Policy</a>
                        <a href="#" className="hover:text-[#4ade80] transition">Terms of Service</a>
                        <a href="#" className="hover:text-[#4ade80] transition">Cookies</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}