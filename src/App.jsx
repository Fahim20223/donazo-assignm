import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen`}>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto h-full scroll-smooth">
          <Header />
          <Dashboard />
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xl px-6 py-3 rounded-full z-50 flex items-center gap-8 backdrop-blur-md">
        <a className="text-primary dark:text-secondary" href="#">
          <span className="material-symbols-outlined text-2xl filled-icon">grid_view</span>
        </a>
        <a className="text-slate-400 hover:text-primary transition-all" href="#">
          <span className="material-symbols-outlined text-2xl">assignment</span>
        </a>
        <a className="text-slate-400 hover:text-primary transition-all" href="#">
          <span className="material-symbols-outlined text-2xl">calendar_today</span>
        </a>
        <a className="text-slate-400 hover:text-primary transition-all" href="#">
          <span className="material-symbols-outlined text-2xl">group</span>
        </a>
        <a className="text-slate-400 hover:text-primary transition-all" href="#">
          <span className="material-symbols-outlined text-2xl">settings</span>
        </a>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-6 right-6 w-12 h-12 bg-white dark:bg-slate-800 shadow-lg rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 z-50 transition-all hover:scale-110 active:scale-95"
      >
        <span className="material-symbols-outlined dark:hidden">dark_mode</span>
        <span className="material-symbols-outlined hidden dark:block text-yellow-400">light_mode</span>
      </button>
    </div>
  );
}

export default App;
