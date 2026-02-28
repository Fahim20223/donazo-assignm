import axios from "axios";
import { useEffect, useState } from "react";

const StatsCards = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    axios
      .get("https://task-api-eight-flax.vercel.app/api/overview")
      .then((res) => {
        const data = res.data;

        // ✅ Keep your old colors + add API values
        const formatted = [
          {
            title: "Total Users",
            value: data.totalUsers,
            trend: "From system",
            color: "bg-primary text-white",
          },
          {
            title: "Active Users",
            value: data.activeUsers,
            trend: "Currently active",
            color: "bg-white dark:bg-slate-900",
            textColor: "text-slate-900 dark:text-white",
          },
          {
            title: "Revenue",
            value: data.revenue,
            trend: "Total earnings",
            color: "bg-white dark:bg-slate-900",
            textColor: "text-slate-900 dark:text-white",
          },
          {
            title: "Growth",
            value: `${data.growth}%`,
            trend: "Monthly growth",
            color: "bg-white dark:bg-slate-900",
            textColor: "text-slate-900 dark:text-white",
          },
        ];

        setStats(formatted);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!stats.length) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${stat.color} p-6 rounded-xl ${
            index > 0 ? "border border-slate-200 dark:border-slate-800" : ""
          } flex flex-col justify-between h-40`}
        >
          <h3 className="text-sm font-medium uppercase tracking-wide">
            {stat.title}
          </h3>

          <p className={`text-4xl font-bold ${stat.textColor}`}>{stat.value}</p>

          <div className="text-xs mt-2 opacity-70">{stat.trend}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
