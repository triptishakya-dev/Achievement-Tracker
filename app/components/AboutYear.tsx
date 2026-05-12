"use client";

import React, { useState, useEffect } from "react";
import { Info, Loader2, Quote } from "lucide-react";

interface AboutYearProps {
  yearId?: number;
}

const AboutYear = ({ yearId }: AboutYearProps) => {
  const [about, setAbout] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!yearId) return;

    const fetchAbout = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/year/id/${yearId}/about`);
        if (!res.ok) throw new Error("Failed to fetch about text");
        const data = await res.json();
        setAbout(data.about);
      } catch (err) {
        console.error("Error fetching about text:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, [yearId]);

  if (loading) {
    return (
      <div className="flex h-64 flex-col items-center justify-center gap-4">
        <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
        <p className="text-slate-400 font-medium">Loading summary...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="relative rounded-3xl bg-slate-50/50 p-8 md:p-12 shadow-inner border border-slate-100 overflow-hidden">
        {/* Decorative Quote Mark */}
        <Quote className="absolute top-6 left-6 h-12 w-12 text-slate-200/50 -z-0" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Info className="h-4 w-4" />
            </div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Yearly Reflection
            </h3>
          </div>

          <p className="text-xl md:text-2xl leading-relaxed text-slate-700 font-medium italic">
            {about || "This year is yet to be chronicled with a detailed summary. Every day was a step towards greatness."}
          </p>

          <div className="mt-10 flex items-center gap-4">
             <div className="h-px flex-1 bg-slate-200" />
             <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
             <div className="h-1.5 w-1.5 rounded-full bg-blue-300" />
             <div className="h-1.5 w-1.5 rounded-full bg-blue-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutYear;
