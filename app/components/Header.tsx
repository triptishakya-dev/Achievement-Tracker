const Header = () => {
  return (
    <header className="w-full relative overflow-hidden bg-linear-to-r from-indigo-600 via-violet-600 to-purple-600 shadow-xl shadow-violet-500/30">
      {/* Decorative blobs */}
      <div className="absolute -top-8 -left-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-8 -right-8 w-52 h-52 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-24 bg-violet-300/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative flex items-center justify-between px-8 py-4">
        {/* Left accent dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-white/40 shadow-inner" />
          <span className="w-2 h-2 rounded-full bg-white/25" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
        </div>

        {/* Center brand */}
        <div className="flex flex-col items-center gap-0.5">
          <div className="flex items-center gap-3">
            {/* Icon badge */}
            <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg shadow-black/20">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-white"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-extrabold tracking-wide text-white drop-shadow-md">
              Achievement{" "}
              <span className="text-yellow-300 drop-shadow-[0_0_10px_rgba(253,224,71,0.6)]">
                Tracker
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-indigo-200/90">
            Milestones &bull; Legacy &bull; Growth
          </p>
        </div>

        {/* Right accent dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
          <span className="w-2 h-2 rounded-full bg-white/25" />
          <span className="w-3 h-3 rounded-full bg-white/40 shadow-inner" />
        </div>
      </div>

      {/* Bottom shimmer line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
    </header>
  );
};

export default Header;
