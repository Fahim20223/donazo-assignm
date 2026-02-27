const ProjectProgress = () => {
  return (
    <div className="lg:col-span-1 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
      <h3 className="font-bold text-lg mb-4 dark:text-white">Project Progress</h3>
      <div className="relative flex flex-col items-center justify-center py-4">
        <svg className="w-full h-auto max-w-[200px]" viewBox="0 0 100 60">
          <path
            className="dark:stroke-slate-800"
            d="M 10 50 A 40 40 0 1 1 90 50"
            fill="none"
            stroke="#e2e8f0"
            strokeLinecap="round"
            strokeWidth="12"
          />
          <path
            d="M 10 50 A 40 40 0 0 1 75 18"
            fill="none"
            stroke="#164E33"
            strokeLinecap="round"
            strokeWidth="12"
          />
        </svg>
        <div className="text-center mt-[-10px]">
          <p className="text-4xl font-bold dark:text-white">41%</p>
          <p className="text-[10px] text-slate-400 font-medium">Project Ended</p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
          <span className="flex items-center gap-1.5 text-[10px] text-slate-500">
            <span className="w-2 h-2 rounded-full bg-primary"></span>Completed
          </span>
          <span className="flex items-center gap-1.5 text-[10px] text-slate-500">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>In Progress
          </span>
          <span className="flex items-center gap-1.5 text-[10px] text-slate-500">
            <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700"></span>Pending
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;
