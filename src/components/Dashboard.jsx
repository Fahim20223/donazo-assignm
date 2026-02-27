import StatsCards from './StatsCards';
import ProjectAnalytics from './ProjectAnalytics';
import Reminders from './Reminders';
import ProjectList from './ProjectList';
import TeamCollaboration from './TeamCollaboration';
import ProjectProgress from './ProjectProgress';
import TimeTracker from './TimeTracker';

const Dashboard = () => {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold dark:text-white">Dashboard</h2>
          <p className="text-sm text-slate-500 mt-1">
            Plan, prioritize, and accomplish your tasks with ease.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-medium hover:bg-opacity-90 transition-all">
            <span className="material-symbols-outlined text-xl">add</span>
            Add Project
          </button>
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-5 py-2.5 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
            Import Data
          </button>
        </div>
      </div>

      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProjectAnalytics />
        <div className="space-y-6">
          <Reminders />
          <ProjectList />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TeamCollaboration />
        <ProjectProgress />
        <TimeTracker />
      </div>

      <div className="h-10"></div>
    </div>
  );
};

export default Dashboard;
