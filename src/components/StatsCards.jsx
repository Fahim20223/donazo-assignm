const StatsCards = () => {
  const stats = [
    { title: 'Total Projects', value: '24', trend: 'Increased from last month', color: 'bg-primary', textColor: 'text-white' },
    { title: 'Ended Projects', value: '10', trend: 'Increased from last month', color: 'bg-white dark:bg-slate-900', textColor: 'text-slate-900 dark:text-white' },
    { title: 'Running Projects', value: '12', trend: 'Increased from last month', color: 'bg-white dark:bg-slate-900', textColor: 'text-slate-900 dark:text-white' },
    { title: 'Pending Project', value: '2', trend: 'On Discuss', color: 'bg-white dark:bg-slate-900', textColor: 'text-slate-900 dark:text-white' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.color} p-6 rounded-xl ${index > 0 ? 'border border-slate-200 dark:border-slate-800' : ''} flex flex-col justify-between relative overflow-hidden h-40 group`}
        >
          {index === 0 && (
            <div className="absolute -right-2 -top-2 w-20 h-20 bg-white/5 rounded-full transition-transform group-hover:scale-125"></div>
          )}
          <div className="flex justify-between items-start">
            <h3 className={`text-sm font-medium ${index === 0 ? 'opacity-80 text-white' : 'text-slate-500'} uppercase tracking-wide`}>
              {stat.title}
            </h3>
            <span className={`material-symbols-outlined text-xl ${index === 0 ? 'bg-white/20 text-white' : 'text-slate-400 border border-slate-200 dark:border-slate-700'} p-1.5 rounded-full`}>
              north_east
            </span>
          </div>
          <div>
            <p className={`text-4xl font-bold ${stat.textColor}`}>{stat.value}</p>
            <div className={`flex items-center gap-1.5 mt-2 text-[10px] ${index === 0 ? 'bg-white/20 text-white' : 'text-slate-400 border border-slate-200 dark:border-slate-700'} w-fit px-2 py-1 rounded-full`}>
              <span className="material-symbols-outlined text-xs">trending_up</span>
              {stat.trend}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
