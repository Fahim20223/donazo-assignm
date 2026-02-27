const Sidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-6">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
          <span className="material-symbols-outlined text-white">dataset</span>
        </div>
        <h1 className="text-2xl font-bold text-primary dark:text-white">Donezo</h1>
      </div>

      <nav className="flex-1 space-y-2">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-3">Menu</p>
        
        <a className="flex items-center gap-3 px-3 py-3 bg-primary/10 text-primary dark:text-secondary rounded-xl transition-all font-medium" href="#">
          <span className="material-symbols-outlined filled-icon">grid_view</span>
          Dashboard
        </a>
        
        <a className="flex items-center justify-between px-3 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all" href="#">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined">assignment</span>
            Tasks
          </div>
          <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full">12+</span>
        </a>
        
        <a className="flex items-center gap-3 px-3 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all" href="#">
          <span className="material-symbols-outlined">calendar_today</span>
          Calendar
        </a>
        
        <a className="flex items-center gap-3 px-3 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all" href="#">
          <span className="material-symbols-outlined">bar_chart</span>
          Analytics
        </a>
        
        <a className="flex items-center gap-3 px-3 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all" href="#">
          <span className="material-symbols-outlined">group</span>
          Team
        </a>

        <div className="pt-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 px-3">General</p>
          
          <a className="flex items-center gap-3 px-3 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all" href="#">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
          
          <a className="flex items-center gap-3 px-3 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all" href="#">
            <span className="material-symbols-outlined">help</span>
            Help
          </a>
          
          <a className="flex items-center gap-3 px-3 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all" href="#">
            <span className="material-symbols-outlined">logout</span>
            Logout
          </a>
        </div>
      </nav>

      <div className="mt-auto bg-primary rounded-2xl p-4 text-white relative overflow-hidden group">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
        <p className="text-sm font-semibold mb-1">Download our</p>
        <p className="text-lg font-bold mb-4">Mobile App</p>
        <button className="bg-white text-primary px-4 py-2 rounded-lg text-xs font-bold w-full hover:bg-opacity-90 transition-all">
          Download
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
