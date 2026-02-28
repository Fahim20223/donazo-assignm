import { useEffect, useState } from "react";
import axios from "axios";

const TeamCollaboration = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://task-api-eight-flax.vercel.app/api/users",
        );

        setMembers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="lg:col-span-1 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-lg dark:text-white">
          Team Collaboration
        </h3>
      </div>

      {loading ? (
        <p className="text-sm text-gray-400">Loading users...</p>
      ) : (
        <div className="space-y-5">
          {members.map((member) => (
            <div key={member.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold">
                  {member.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-bold dark:text-white">
                    {member.name}
                  </p>

                  <p className="text-[10px] text-slate-400">{member.email}</p>
                </div>
              </div>

              <span
                className={`text-[10px] px-2 py-0.5 rounded ${
                  member.status === "active"
                    ? "bg-green-50 text-green-600"
                    : "bg-red-50 text-red-600"
                }`}
              >
                {member.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamCollaboration;
