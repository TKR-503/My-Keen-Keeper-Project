"use client";
import { createContext, useContext, useState, useEffect } from "react";

const TimelineContext = createContext(null);

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState(() => {
    try {
      const stored = localStorage.getItem("kk_timeline");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const addEntry = (entry) => {
    const newEntries = [entry, ...entries];
    setEntries(newEntries);
    localStorage.setItem("kk_timeline", JSON.stringify(newEntries));
  };

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  const ctx = useContext(TimelineContext);
  if (!ctx) throw new Error("useTimeline must be used inside TimelineProvider");
  return ctx;
}
