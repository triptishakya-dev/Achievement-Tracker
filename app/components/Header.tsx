const Header = () => {
  return (
    <header className="w-full py-10 flex flex-col items-center justify-center bg-white border-b border-slate-200 shadow-sm">
      <div className="relative flex flex-col items-center gap-2">
        <div className="flex items-center gap-3">
          <span className="text-4xl font-black tracking-tight bg-linear-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
            Achievement
          </span>
          <span className="text-4xl font-black tracking-tight text-slate-800">
            Tracker
          </span>
        </div>
        <p className="text-sm font-medium tracking-widest text-slate-400 uppercase">
          Your journey, year by year
        </p>
        <div className="mt-2 h-1 w-24 rounded-full bg-linear-to-r from-blue-500 via-violet-500 to-purple-500" />
      </div>
    </header>
  );
};

export default Header;
