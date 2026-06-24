import {
ResponsiveContainer,
BarChart,
Bar,
XAxis,
YAxis,
Tooltip,
CartesianGrid,
Cell,
} from "recharts";

import {
TrendingUp,
Users,
Sparkles,
} from "lucide-react";

import { hiringData } from "../../data/dashboardData";

function HiringAnalytics() {
const colors = [
"#8b5cf6",
"#7c3aed",
"#6366f1",
"#3b82f6",
"#06b6d4",
];

return (
<div
className="
relative
overflow-hidden

```
  bg-white/80
  dark:bg-slate-900/80

  backdrop-blur-xl

  rounded-[32px]

  p-5 md:p-7

  border
  border-slate-200/60
  dark:border-slate-800

  shadow-xl
  dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)]
"
>
  {/* Background Glow */}
  <div
    className="
    absolute
    -top-24
    -right-24

    w-72
    h-72

    rounded-full

    bg-violet-500/10
    blur-3xl

    pointer-events-none
  "
  />

  {/* Header */}
  <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8 ">
    <div>
      <div className="flex items-center gap-2">
        <Sparkles
          size={16}
          className="text-violet-500"
        />

        <p className="text-sm text-violet-600 font-medium">
          Hiring Analytics
        </p>
      </div>

      <h2
        className="
        text-2xl
        md:text-3xl
        font-bold
        text-slate-800
        dark:text-white
        mt-3
      "
      >
        2,714 Candidates
      </h2>

      <div className="flex items-center gap-2 mt-3">
        <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium">
          <TrendingUp size={16} />
          +142
        </div>

        <span className="text-sm text-slate-500 dark:text-slate-400">
          new applications this month
        </span>
      </div>
    </div>

    <div
      className="
      px-4
      py-2

      rounded-2xl

      bg-violet-100
      dark:bg-violet-500/15

      text-violet-600

      text-sm
      font-medium
    "
    >
      ● Live Tracking
    </div>
  </div>

  {/* Quick Stats */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
    {[
      {
        label: "Applications",
        value: "2,714",
      },
      {
        label: "Shortlisted",
        value: "1,248",
      },
      {
        label: "Hired",
        value: "324",
      },
    ].map((item) => (
      <div
        key={item.label}
        className="
        bg-slate-50/80
        dark:bg-slate-800/60

        backdrop-blur-xl

        border
        border-slate-200/50
        dark:border-slate-700

        rounded-2xl

        p-4
      "
      >
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {item.label}
        </p>

        <h4 className="text-xl font-bold text-slate-800 dark:text-white mt-1">
          {item.value}
        </h4>
      </div>
    ))}
  </div>

  {/* Chart */}
  <ResponsiveContainer
    width="100%"
    height={300}
  >
    <BarChart data={hiringData}>
      <CartesianGrid
        strokeDasharray="3 3"
        vertical={false}
        stroke="#334155"
        opacity={0.2}
      />

      <XAxis
        dataKey="stage"
        tickLine={false}
        axisLine={false}
        tick={{
          fill: "#94a3b8",
          fontSize: 12,
        }}
      />

      <YAxis
        tickLine={false}
        axisLine={false}
        tick={{
          fill: "#94a3b8",
          fontSize: 12,
        }}
      />

      <Tooltip
        cursor={{
          fill:
            "rgba(139,92,246,0.08)",
        }}
        contentStyle={{
          borderRadius: "16px",
          border: "none",
          background: "#0f172a",
          color: "#fff",
          boxShadow:
            "0px 10px 30px rgba(0,0,0,0.35)",
        }}
      />

      <Bar
        dataKey="count"
        radius={[14, 14, 0, 0]}
      >
        {hiringData.map(
          (entry, index) => (
            <Cell
              key={index}
              fill={
                colors[
                  index %
                    colors.length
                ]
              }
            />
          )
        )}
      </Bar>
    </BarChart>
  </ResponsiveContainer>

  {/* Footer */}
  <div
    className="
    mt-6
    pt-5

    border-t
    border-slate-100
    dark:border-slate-800

    flex
    flex-col
    sm:flex-row

    gap-4

    justify-between
    items-center
  "
  >
    <div className="flex items-center gap-2">
      <Users
        size={16}
        className="text-violet-500"
      />

      <span className="text-sm text-slate-500 dark:text-slate-400">
        Hiring funnel updated in real time
      </span>
    </div>

    <button
      className="
      px-4
      py-2

      rounded-xl

      bg-gradient-to-r
      from-violet-500
      to-blue-500

      text-white
      text-sm

      hover:scale-105
      transition-all
    "
    >
      View Report
    </button>
  </div>
</div>


);
}

export default HiringAnalytics;
