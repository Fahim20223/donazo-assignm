const Reminders = () => {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
      <h3 className="font-bold text-lg mb-4 dark:text-white">Reminders</h3>
      <div className="mb-6">
        <h4 className="text-xl font-bold text-primary dark:text-secondary mb-1">
          Meeting with Arc Company
        </h4>
        <p className="text-xs text-slate-400">Time : 02.00 pm - 04.00 pm</p>
      </div>
      <button className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl hover:bg-opacity-95 transition-all">
        <span className="material-symbols-outlined text-lg">videocam</span>
        Start Meeting
      </button>
    </div>
  );
};

export default Reminders;
