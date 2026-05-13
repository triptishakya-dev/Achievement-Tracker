"use client";

import React, { useState, useEffect } from "react";
import Gallery from "./Gallery";
import Achievements from "./Achievements";
import AboutYear from "./AboutYear";

interface YearDetailProps {
  selectedYear: number;
}

type TabType = "Gallery" | "Achievements" | "About";

const YearDetail = ({ selectedYear }: YearDetailProps) => {
  const [activeTab, setActiveTab] = useState<TabType>("Achievements");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedYear) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/year/${selectedYear}/details`);
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Failed to fetch year details", err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedYear]);

  const tabs: TabType[] = ["Gallery", "Achievements", "About"];

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
        {/* Background Accents */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

        {/* Header & Tabs */}
        <div className="relative z-10 mb-10 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">
              {selectedYear}
            </h2>
            <p className="mt-1 text-slate-500 font-medium">Yearly Overview</p>
          </div>

          <nav className="flex space-x-1 rounded-xl bg-slate-100 p-1 backdrop-blur-sm">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                  activeTab === tab
                    ? "bg-white text-blue-600 shadow-sm ring-1 ring-slate-200"
                    : "text-slate-500 hover:bg-white/50 hover:text-slate-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="relative z-10 min-h-[400px]">
          {loading ? (
            <div className="flex h-full min-h-[400px] flex-col items-center justify-center gap-4">
               <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
               <p className="animate-pulse text-slate-400 font-medium tracking-wide">Loading records...</p>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
              {activeTab === "Gallery" && <Gallery yearId={data?.id} />}
              {activeTab === "Achievements" && <Achievements yearId={data?.id} />}
              {activeTab === "About" && <AboutYear yearId={data?.id} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};




export default YearDetail;
