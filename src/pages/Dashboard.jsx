// import { useEffect, useState } from "react";
// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
// import StatsCards from "../components/StatsCards";
// import ProjectAnalytics from "../components/ProjectAnalytics";
// import Reminders from "../components/Reminders";
// import ProjectList from "../components/ProjectList";
// import TeamCollaboration from "../components/TeamCollaboration";
// import ProjectProgress from "../components/ProjectProgress";
// import TimeTracker from "../components/TimeTracker";

// const Dashboard = () => {
//   const [darkMode, setDarkMode] = useState(
//     localStorage.getItem("theme") === "dark",
//   );

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     // <div className="flex h-screen overflow-hidden">
//     //   <Sidebar />

//     //   <main className="flex-1 overflow-y-auto h-full">
//     //     <Header />

//     //     <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
//     //       <StatsCards />

//     //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//     //         <ProjectAnalytics />
//     //         <div className="space-y-6">
//     //           <Reminders />
//     //           <ProjectList />
//     //         </div>
//     //       </div>

//     //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//     //         <TeamCollaboration />
//     //         <ProjectProgress />
//     //         <TimeTracker />
//     //       </div>
//     //     </div>
//     //   </main>
//     // </div>

//     <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
//       <div className="flex h-screen overflow-hidden">
//         <Sidebar />

//         <main className="flex-1 overflow-y-auto h-full">
//           <Header />

//           {/* Your dashboard content */}
//         </main>
//       </div>

//       {/* Dark Mode Toggle Button */}
//       <button
//         onClick={toggleDarkMode}
//         className="fixed bottom-6 right-6 w-12 h-12 bg-white dark:bg-slate-800 shadow-lg rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 z-50 transition-all hover:scale-110 active:scale-95"
//       >
//         <span className="material-symbols-outlined dark:hidden">dark_mode</span>
//         <span className="material-symbols-outlined hidden dark:block text-yellow-400">
//           light_mode
//         </span>
//       </button>
//     </div>
//   );
// };

// export default Dashboard;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCards from "../components/StatsCards";
import ProjectAnalytics from "../components/ProjectAnalytics";
import Reminders from "../components/Reminders";
import ProjectList from "../components/ProjectList";
import TeamCollaboration from "../components/TeamCollaboration";
import ProjectProgress from "../components/ProjectProgress";
import TimeTracker from "../components/TimeTracker";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove auth token
    navigate("/"); // go back to login
  };

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto h-full">
          <Header />

          <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 md:space-y-8">
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
          </div>
        </main>
      </div>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-6 right-6 w-12 h-12 bg-white dark:bg-slate-800 shadow-lg rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-700 z-50 transition-all hover:scale-110 active:scale-95"
      >
        <span className="material-symbols-outlined dark:hidden">dark_mode</span>
        <span className="material-symbols-outlined hidden dark:block text-yellow-400">
          light_mode
        </span>
      </button>
    </div>
  );
};

export default Dashboard;
