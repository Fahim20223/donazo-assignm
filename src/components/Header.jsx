const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 md:px-8 py-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-7xl mx-auto">
        <div className="relative flex-1 max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
            search
          </span>
          <input
            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full pl-10 pr-12 py-2.5 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
            placeholder="Search task"
            type="text"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-[10px] text-slate-400 border border-slate-200 dark:border-slate-700">
            ⌘ F
          </span>
        </div>

        <div className="flex items-center gap-3 md:gap-4 self-end md:self-auto">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
            <span className="material-symbols-outlined text-xl">mail</span>
          </button>
          
          <button className="w-10 h-10 relative flex items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
            <span className="material-symbols-outlined text-xl">notifications</span>
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
          </button>
          
          <div className="h-10 w-[1px] bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
          
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold dark:text-white leading-tight">Totok Michael</p>
              <p className="text-[10px] text-slate-400">tmichael20@mail.com</p>
            </div>
            <img
              alt="User Profile"
              className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 shadow-sm bg-slate-100"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0uV4EpsIySa3LqoAG0Fe_8bWN-rUVCTz8dEt7XrCD4S-dTBp9otG7cDFx4fC-8RGfrqkOoO9YVc5LP_Ay7ptNAGwILr6NxXchlUSALxkayhjPSId_qnsKH7JBXY-5x5hdpSdRzH_IJUgbswLjq0ZiT2e3oJthcHU0eh5wn_HAhUFFeVgdZo6Jfu0QzpbVDwRfIoaBK2GA9Htv4xcjNtyUbo0-lec9IwD_qq2juqwEPXjZKCdeyYHt08VipIFUuwNWV7a0BhP3ONM"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
