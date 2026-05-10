"use client";

import { useState } from "react";
import { useTimeline } from "@/context/TimelineContext";
import { Phone, MessageSquare, Video, ChevronDown } from "lucide-react";

const typeConfig = {
  Call:  { icon: Phone,         iconBg: "bg-blue-100", iconColor: "text-blue-500", labelColor: "text-blue-600" },
  Text:  { icon: MessageSquare, iconBg: "bg-gray-100", iconColor: "text-gray-500", labelColor: "text-gray-700" },
  Video: { icon: Video,         iconBg: "bg-gray-100", iconColor: "text-gray-500", labelColor: "text-gray-700" },
};

const FILTERS = ["All", "Call", "Text", "Video"];

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric",
  });
}

function parseTitle(title) {
  const match = title.match(/^(\w+)\s+with\s+(.+)$/);
  if (match) return { type: match[1], name: match[2] };
  return { type: "", name: title };
}

export default function TimelinePage() {
  const { entries } = useTimeline();
  const [filter, setFilter]     = useState("All");
  const [dropdown, setDropdown] = useState(false);

  const filtered =
    filter === "All" ? entries : entries.filter((e) => e.type === filter);

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="border-2 border-dashed border-blue-200 rounded-xl p-4 sm:p-6">

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5">
            Timeline
          </h1>

          {/* filter dropdown */}
          <div className="relative mb-5">
            <button
              onClick={() => setDropdown((v) => !v)}
              className="w-full flex items-center justify-between border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-400 bg-white hover:border-gray-300 transition-colors"
            >
              <span>{filter === "All" ? "Filter timeline..." : `Filter: ${filter}`}</span>
              <ChevronDown size={16} className={`transition-transform duration-200 ${dropdown ? "rotate-180" : ""}`} />
            </button>

            {dropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-md z-10 overflow-hidden">
                {FILTERS.map((f) => (
                  <button
                    key={f}
                    onClick={() => { setFilter(f); setDropdown(false); }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      filter === f ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* entries */}
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Phone size={24} className="text-gray-300" />
              </div>
              <p className="text-gray-500 font-medium text-sm">No entries yet</p>
              <p className="text-gray-400 text-xs mt-1 max-w-xs">
                Go to a friend&apos;s page and tap Call, Text, or Video to log a check-in.
              </p>
            </div>
          ) : (
            <div className="flex flex-col">
              {filtered.map((entry, idx) => {
                const { type, name } = parseTitle(entry.title);
                const cfg  = typeConfig[type] ?? typeConfig["Text"];
                const Icon = cfg.icon;
                const isLast = idx === filtered.length - 1;
                return (
                  <div
                    key={entry.id}
                    className={`flex items-center gap-4 py-3 sm:py-4 ${
                      !isLast ? "border-b border-dashed border-blue-100" : ""
                    }`}
                  >
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 ${cfg.iconBg}`}>
                      <Icon size={16} className={cfg.iconColor} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-gray-800 leading-tight">
                        <span className={`font-bold ${cfg.labelColor}`}>{type}</span>{" "}
                        <span className="text-gray-500 font-normal">with {name}</span>
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{formatDate(entry.date)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}