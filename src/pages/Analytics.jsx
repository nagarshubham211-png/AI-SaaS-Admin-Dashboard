import {
  Users,
  Brain,
  TrendingUp,
  Target,
  ArrowUpRight,
} from "lucide-react";

import HiringAnalytics from "../components/charts/HiringAnalytics";
import ATSDonutChart from "../components/charts/ATSDonutChart";
import TopSkills from "../components/ui/TopSkills";
import RecentActivity from "../components/ui/RecentActivity";

function Analytics() {
  const stats = [
    {
      title: "Total Candidates",
      value: "12,540",
      growth: "+12%",
      icon: Users,
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Average ATS",
      value: "82%",
      growth: "+5%",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Hiring Success",
      value: "91%",
      growth: "+18%",
      icon: Target,
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Growth Rate",
      value: "24%",
      growth: "+7%",
      icon: TrendingUp,
      color: "from-orange-500 to-pink-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <span
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-violet-100
              dark:bg-violet-500/10
              text-violet-600
              text-sm
              font-semibold
            "
          >
            <TrendingUp size={16} />
            Analytics Center
          </span>

          <h1
            className="
              mt-4
              text-3xl
              md:text-5xl
              font-black
              text-slate-800
              dark:text-white
            "
          >
            Hiring Analytics
          </h1>

          <p
            className="
              mt-3
              text-slate-500
              dark:text-slate-400
              max-w-3xl
            "
          >
            Monitor ATS performance, hiring trends,
            candidate quality and recruitment insights
            powered by AI.
          </p>
        </div>

        <div
          className="
            bg-white
            dark:bg-slate-900
            border
            border-slate-200
            dark:border-slate-800
            rounded-3xl
            p-5
            shadow-sm
            min-w-[220px]
          "
        >
          <p className="text-sm text-slate-500">
            Monthly Growth
          </p>

          <h3 className="text-4xl font-bold text-violet-600 mt-1">
            +24%
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Compared to last month
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-5
        "
      >
        {stats.map((item) => (
          <div
            key={item.title}
            className={`
              relative
              overflow-hidden

              bg-gradient-to-br
              ${item.color}

              rounded-[30px]
              p-6

              text-white

              shadow-xl

              hover:-translate-y-1
              transition-all
            `}
          >
            <div className="flex justify-between">
              <div>
                <p className="text-white/80 text-sm">
                  {item.title}
                </p>

                <h3 className="text-4xl font-black mt-3">
                  {item.value}
                </h3>

                <div className="flex items-center gap-1 mt-4 text-sm">
                  <ArrowUpRight size={14} />
                  {item.growth}
                </div>
              </div>

              <div
                className="
                  w-14
                  h-14

                  rounded-2xl
                  bg-white/20

                  flex
                  items-center
                  justify-center
                "
              >
                <item.icon size={24} />
              </div>
            </div>

            <div
              className="
                absolute
                -right-10
                -bottom-10
                w-40
                h-40
                rounded-full
                bg-white/10
              "
            />
          </div>
        ))}
      </div>

      {/* Charts */}
      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-6
        "
      >
        <div className="xl:col-span-2">
          <HiringAnalytics />
        </div>

        <ATSDonutChart />
      </div>

      {/* Bottom Cards */}
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
        "
      >
        <TopSkills />
        <RecentActivity />
      </div>

      {/* AI Summary */}
      <div
        className="
          relative
          overflow-hidden

          bg-gradient-to-r
          from-violet-600
          via-purple-600
          to-blue-500

          rounded-[32px]
          p-8

          text-white
        "
      >
        <div
          className="
            absolute
            -top-16
            -right-16
            w-56
            h-56
            rounded-full
            bg-white/10
          "
        />

        <p className="text-white/80 text-sm">
          AI Recruitment Insight
        </p>

        <h2 className="text-3xl font-bold mt-2">
          Hiring Performance Improving
        </h2>

        <p className="mt-4 text-white/90 max-w-3xl">
          AI analysis indicates stronger ATS scores,
          increased shortlist quality and higher
          interview success rates compared to previous
          months. Frontend and React-based candidates
          remain the highest performing segment.
        </p>
      </div>
    </div>
  );
}

export default Analytics;