const TeamCollaboration = () => {
  const members = [
    {
      name: 'Alexandra Deff',
      task: 'Github Project Repository',
      status: 'Completed',
      statusColor: 'bg-green-50 dark:bg-green-900/20 text-green-600',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLrAGbFgCxjRnswLjerBEtIF1yyO3DpTXV8NPoEJgOmPW8I8oCCZkIItJf-gm0vu6TjAhYikWe32WL0sRIv1i_a3zM101VuN_zR7aOxRl645QebrpwTZyEhyJgS_FoeS_62jzr3gfoMmchOseu_KCs8onLMreNAJykkgWH7vVhly-TY-CgkLAmzocSdcvb2JQjc3cE4Ts9HsOnXq5vmUcsth1l9w8BUXVdpctmZgAJR8JM2dhX7wI5HGjuyTALdJiDzbe1riQQ8nA'
    },
    {
      name: 'Edwin Adenike',
      task: 'Integrate User Authentication',
      status: 'In Progress',
      statusColor: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDloTFzUCOwd_vJxfPFmn8ApEjmhEOr6j01ifUodyKkwhArngs70IBAfa7rWXlfs9ZPpIi6EBmWPPfCilUc99oFLB-WGXvd7Zmhdy18ZUG2bK585tF49Mq-9MMM0SwxtnsNCZwjq2vBX8NyFVGK2_7p5AathYdbTyAyVa1XnMSAiVs2APeLxGVHmWG9d06Ocn-D1iN2SPEZgGOAHUP-FB2BRa-NJDB5Ylvg53Jk2pDafBZbel-m053LBiLdWHujNj3xr40knvM7j3o'
    },
    {
      name: 'Isaac Oluwatemilorun',
      task: 'Develop Search Filter',
      status: 'Pending',
      statusColor: 'bg-red-50 dark:bg-red-900/20 text-red-600',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGana3Cx5CFr1UxPqk_9iojwVzm2K_WwYyqDsoWBMmbMpsqArfcNCqvITvdt96kxeVDUOTEKPab5oe-XVjcuvCggjyRMG34eJ37VCrctVho6w5VFkq_wv73x0LCjmPrqi94UojmEwha8nuCA7kG1U33O8VwOnlaUd66MJS6djQoXfrMx6NnkbpPoGt9kZxAxjgRDTdkxQ_TlfENspWqfdd8fdgM5yETubi_NSJ2hSNaLsbC9uJ9XdiM4WOYeAjQkXyTa1UxV4JmWI'
    }
  ];

  return (
    <div className="lg:col-span-1 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-lg dark:text-white">Team Collaboration</h3>
        <button className="flex items-center gap-1 text-[10px] font-bold border border-slate-200 dark:border-slate-700 px-2 py-1 rounded-full text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined text-sm">add</span>
          Member
        </button>
      </div>
      <div className="space-y-5">
        {members.map((member, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img alt={member.name} className="w-9 h-9 rounded-full" src={member.avatar} />
              <div>
                <p className="text-sm font-bold dark:text-white">{member.name}</p>
                <p className="text-[10px] text-slate-400">
                  Working on <span className="font-medium text-slate-600 dark:text-slate-300">{member.task}</span>
                </p>
              </div>
            </div>
            <span className={`text-[10px] px-2 py-0.5 ${member.statusColor} rounded`}>
              {member.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCollaboration;
