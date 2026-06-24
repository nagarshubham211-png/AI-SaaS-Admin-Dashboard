import {
  Users,
  UserCheck,
  Clock3,
  Plus,
  Search,
  Filter,
  Download,
  ArrowUpRight,
} from "lucide-react";

import CandidatesTable from "../components/tables/CandidatesTable";

function Candidates() {
  const stats = [
    {
      title: "Total Candidates",
      value: "12,540",
      growth: "+12%",
      icon: Users,
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Shortlisted",
      value: "1,248",
      growth: "+8%",
      icon: UserCheck,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Pending Review",
      value: "324",
      growth: "+5%",
      icon: Clock3,
      color: "from-orange-500 to-pink-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div
        className="
          relative
          overflow-hidden

          rounded-[32px]

          bg-gradient-to-br
          from-violet-600
          via-purple-600
          to-blue-600

          p-8 lg:p-10

          text-white
        "
      >
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/10" />

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-white/80 font-medium">
              Talent Pipeline Management
            </p>

            <h1 className="text-4xl lg:text-6xl font-bold mt-2">
              Candidates
            </h1>

            <p className="mt-4 text-white/80 max-w-2xl">
              Search, analyze and manage your candidate
              database with AI-powered hiring insights.
            </p>
          </div>

          <button
            className="
              flex items-center gap-2

              px-6 py-4

              rounded-2xl

              bg-white
              text-slate-900

              font-semibold

              hover:scale-105
              transition-all
            "
          >
            <Plus size={18} />
            Add Candidate
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="
              bg-white/80
              dark:bg-slate-900/80

              backdrop-blur-xl

              border
              border-slate-200
              dark:border-slate-800

              rounded-[30px]

              p-6

              shadow-lg

              hover:-translate-y-1
              hover:shadow-2xl

              transition-all
            "
          >
            <div className="flex justify-between">
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  {item.title}
                </p>

                <h3 className="text-4xl font-bold mt-3 text-slate-800 dark:text-white">
                  {item.value}
                </h3>

                <div className="flex items-center gap-1 mt-4 text-emerald-500 text-sm font-medium">
                  <ArrowUpRight size={15} />
                  {item.growth} this month
                </div>
              </div>

              <div
                className={`
                  w-14 h-14
                  rounded-2xl

                  bg-gradient-to-br
                  ${item.color}

                  text-white

                  flex items-center justify-center

                  shadow-lg
                `}
              >
                <item.icon size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SEARCH BAR */}
      <div
        className="
          bg-white
          dark:bg-slate-900

          border
          border-slate-100
          dark:border-slate-800

          rounded-[30px]

          p-5

          shadow-sm
        "
      >
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              placeholder="Search candidates..."
              className="
                w-full

                pl-12
                pr-4
                py-3

                rounded-2xl

                bg-slate-100
                dark:bg-slate-800

                outline-none

                text-slate-800
                dark:text-white
              "
            />
          </div>

          <button
            className="
              flex items-center justify-center gap-2

              px-5 py-3

              rounded-2xl

              bg-slate-100
              dark:bg-slate-800

              hover:scale-105

              transition-all
            "
          >
            <Filter size={18} />
            Filter
          </button>

          <button
            className="
              flex items-center justify-center gap-2

              px-5 py-3

              rounded-2xl

              bg-gradient-to-r
              from-violet-500
              to-blue-500

              text-white

              hover:scale-105

              transition-all
            "
          >
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      {/* TABLE */}
      <CandidatesTable />
    </div>
  );
}

export default Candidates;