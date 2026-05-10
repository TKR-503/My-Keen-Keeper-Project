"use client";

import { createContext, useContext, useState, useEffect } from "react";

const STORAGE_KEY = "kk_timeline";

const TimelineContext = createContext(null);

export function TimelineProvider({ children }) {
  
  const [entries, setEntries] = useState([]);


  function addEntry(newEntry) {
    setEntries(function (prev) {
      return [newEntry, ...prev];
    });
  }

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  const ctx = useContext(TimelineContext);
  if (!ctx) {
    throw new Error("useTimeline must be used inside <TimelineProvider>");
  }
  return ctx;
}