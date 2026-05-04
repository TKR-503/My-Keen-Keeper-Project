"use client";
import { useEffect, useState } from "react";
import { CheckCircle, X } from "lucide-react";


const Toast = ({ message, type = "success", onClose }) => {

    useEffect(() => {
        const t = setTimeout(onClose, 3500);
        return () => clearTimeout(t);
    }, [onClose]);

    return (
        <div className="fixed bottom-6 right-6 z-100 animate-slide-up">
            <div className="flex items-center gap-3 bg-[#1a2e22] border border-[#4ade80]/40 text-white px-5 py-3.5 rounded-xl shadow-2xl shadow-black/40 min-w-65">
                <CheckCircle size={18} className="text-[#4ade80] shrink-0" />
                <p className="text-sm font-medium flex-1">{message}</p>
                <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                    <X size={14} />
                </button>
            </div>
        </div>
    );
};

export default Toast;