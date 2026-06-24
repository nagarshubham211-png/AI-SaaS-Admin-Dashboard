import {
  Users,
  UserCheck,
  Brain,
  Calendar,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import RevenueChart from "../components/charts/HiringAnalytics";
import AIInsights from "../components/ui/AIInsights";
import RecentActivity from "../components/ui/RecentActivity";
import CandidatesTable from "../components/tables/CandidatesTable";
import ATSDonutChart from "../components/charts/ATSDonutChart";
import TopSkills from "../components/ui/TopSkills";
import HiringFunnel from "../components/ui/HiringFunnel";

function Dashboard() {
  const cards = [
    {
      title: "Total Applications",
      value: "12,540",
      growth: "+12%",
      icon: Users,
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Shortlisted Rate",
      value: "38%",
      growth: "+8%",
      icon: UserCheck,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Average ATS",
      value: "82%",
      growth: "+5%",
      icon: Brain,
      color: "from-emerald-500 to-green-500",
    },
    {
      title: "Hiring Success",
      value: "91%",
      growth: "+18%",
      icon: Calendar,
      color: "from-orange-500 to-pink-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div
        className="
        relative
        overflow-hidden

        rounded-[36px]

        bg-gradient-to-r
        from-violet-600
        via-purple-600
        to-blue-600

        p-6 md:p-8

        text-white
      "
      >
        <div
          className="
          absolute
          -top-20
          -right-20

          w-72
          h-72

          rounded-full

          bg-white/10

          blur-3xl
        "
        />

        <div className="relative">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={18} />

            <span className="text-sm font-medium">
              AI Powered Hiring Platform
            </span>
          </div>

          <h1
            className="
            text-3xl
            md:text-5xl

            font-bold
          "
          >
            Welcome Back, Shubham 
          </h1>

          <p
            className="
            mt-3

            text-white/80

            max-w-2xl
          "
          >
            Monitor ATS performance, hiring funnel,
            candidate quality and AI recruitment insights
            in real time.
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

        gap-6
      "
      >
        {cards.map((card) => (
          <div
            key={card.title}
            className={`
              relative
              overflow-hidden

              rounded-[30px]

              bg-gradient-to-br
              ${card.color}

              p-6

              text-white

              shadow-xl

              hover:-translate-y-1
              hover:shadow-2xl

              transition-all
            `}
          >
            <div className="flex justify-between">
              <div>
                <p className="text-white/80 text-sm">
                  {card.title}
                </p>

                <h3 className="text-4xl font-bold mt-3">
                  {card.value}
                </h3>

                <div className="flex items-center gap-1 mt-4 text-sm">
                  <ArrowUpRight size={14} />
                  {card.growth}
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
                <card.icon size={24} />
              </div>
            </div>

            <div
              className="
              absolute
              -right-8
              -bottom-8

              w-32
              h-32

              rounded-full

              bg-white/10
            "
            />
          </div>
        ))}
      </div>

      {/* Main Analytics */}
      <div
        className="
        grid

        grid-cols-1
        xl:grid-cols-12

        gap-6
      "
      >
        <div className="xl:col-span-7">
          <RevenueChart />
        </div>

        <div className="xl:col-span-5">
          <AIInsights />
        </div>
      </div>

      {/* Charts */}
      <div
        className="
        grid

        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3

        gap-6
      "
      >
        <ATSDonutChart />

        <TopSkills />

        <HiringFunnel />
      </div>

      {/* Activity */}
      <div
        className="
        grid

        grid-cols-1
        lg:grid-cols-2

        gap-6
      "
      >
        <RecentActivity />

        <div
          className="
          rounded-[32px]

          bg-gradient-to-br
          from-violet-600
          via-purple-600
          to-blue-500

          p-6

          text-white
        "
        >
          <h3 className="text-2xl font-bold">
            AI Hiring Copilot
          </h3>

          <p className="mt-3 text-white/80">
            AI has identified 148 high-potential
            candidates for priority review.
          </p>

          <button
            className="
            mt-6

            px-5
            py-3

            rounded-2xl

            bg-white

            text-slate-900

            font-semibold
          "
          >
            View Recommendations
          </button>
        </div>
      </div>

      {/* Table */}
      <CandidatesTable />
    </div>
  );
}

export default Dashboard;