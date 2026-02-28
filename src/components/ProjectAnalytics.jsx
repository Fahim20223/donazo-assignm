// const ProjectAnalytics = () => {
//   const chartData = [
//     {
//       day: "S",
//       height: "h-24",
//       color: "bg-slate-100 dark:bg-slate-800",
//       striped: true,
//     },
//     { day: "M", height: "h-32", color: "bg-primary", striped: false },
//     {
//       day: "T",
//       height: "h-28",
//       color: "bg-primary/20",
//       innerHeight: "h-20",
//       innerColor: "bg-secondary",
//       label: "74%",
//     },
//     { day: "W", height: "h-40", color: "bg-primary", striped: false },
//     {
//       day: "T",
//       height: "h-32",
//       color: "bg-slate-100 dark:bg-slate-800",
//       striped: true,
//     },
//     {
//       day: "F",
//       height: "h-36",
//       color: "bg-slate-100 dark:bg-slate-800",
//       striped: true,
//     },
//     {
//       day: "S",
//       height: "h-28",
//       color: "bg-slate-100 dark:bg-slate-800",
//       striped: true,
//     },
//   ];

//   return (
//     <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
//       <div className="flex items-center justify-between mb-8">
//         <h3 className="font-bold text-lg dark:text-white">Project Analytics</h3>
//         <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
//           <span className="flex items-center gap-1.5">
//             <span className="w-2 h-2 rounded-full bg-primary"></span>Done
//           </span>
//           <span className="flex items-center gap-1.5">
//             <span className="w-2 h-2 rounded-full bg-slate-200 dark:bg-slate-700"></span>
//             In Progress
//           </span>
//         </div>
//       </div>
//       <div className="flex items-end justify-between h-48 gap-3">
//         {chartData.map((bar, index) => (
//           <div key={index} className="flex flex-col items-center gap-2 flex-1">
//             <div
//               className={`w-full ${bar.color} rounded-full ${bar.height} relative overflow-hidden`}
//             >
//               {bar.striped && (
//                 <div className="absolute bottom-0 w-full chart-striped h-full border-t-2 border-slate-300 dark:border-slate-600"></div>
//               )}
//               {bar.innerHeight && (
//                 <>
//                   <div
//                     className={`absolute bottom-0 w-full ${bar.innerColor} ${bar.innerHeight} rounded-b-full`}
//                   ></div>
//                   <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 px-2 py-0.5 rounded text-[10px] shadow-sm border border-slate-100 dark:border-slate-700 font-bold text-primary dark:text-secondary">
//                     {bar.label}
//                   </div>
//                 </>
//               )}
//             </div>
//             <span className="text-xs text-slate-400 font-medium">
//               {bar.day}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectAnalytics;

import { useEffect, useState } from "react";
import axios from "axios";

const ProjectAnalytics = () => {
  const [analytics, setAnalytics] = useState([]);

  useEffect(() => {
    axios
      .get("https://task-api-eight-flax.vercel.app/api/analytics")
      .then((res) => {
        setAnalytics(res.data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, []);

  // Get max views for scaling
  const maxViews = Math.max(...analytics.map((item) => item.views), 1);

  return (
    <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-bold text-lg dark:text-white">Views Analytics</h3>
        {analytics.length > 0 && (
          <span className="text-sm text-slate-400">
            Latest: {analytics[analytics.length - 1].views}
          </span>
        )}
      </div>

      {/* Chart */}
      <div className="flex items-end justify-between h-52 gap-4">
        {analytics.map((item, index) => {
          const height = (item.views / maxViews) * 100;

          return (
            <div
              key={index}
              className="flex-1 bg-primary rounded-xl transition-all duration-700 ease-out"
              style={{ height: `${height}%` }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectAnalytics;
