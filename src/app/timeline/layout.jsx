"use client";

import { TimelineProvider } from "@/context/TimelineContext";

export default function TimelineLayout({ children }) {
    return <TimelineProvider>
        {children}
    </TimelineProvider>;
}