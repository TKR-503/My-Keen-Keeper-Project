import { Heart } from "lucide-react";
import Link from "next/link";
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#1a2e22] border-t border-[#2d4a38] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
            
                <Image src="/assets/logo-xl.png" alt="KeenKeeper Logo" width={200} height={200} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Keep your friendships alive. Track meaningful connections and never let important relationships fade away.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Navigate</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/timeline", label: "Timeline" },
                { href: "/stats", label: "Stats" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-[#4ade80] text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tagline */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-widest">Remember</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Friendship is not about whom you have known the longest, but who came and never left your side.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#2d4a38] text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} KinKeeper. Built with care by tawhid rafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
