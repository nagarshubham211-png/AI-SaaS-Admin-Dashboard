import {
PieChart,
Pie,
Cell,
ResponsiveContainer,
Tooltip,
} from "recharts";

import {
Brain,
TrendingUp,
} from "lucide-react";

const data = [
{ name: "90-100", value: 42 },
{ name: "80-89", value: 31 },
{ name: "70-79", value: 18 },
{ name: "<70", value: 9 },
];

const COLORS = [
"#8b5cf6",
"#3b82f6",
"#10b981",
"#f59e0b",
];

function ATSDonutChart() {
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

  p-6

  border
  border-slate-200/60
  dark:border-slate-800

  shadow-xl
"
>
  {/* Glow */}
  <div
    className="
    absolute
    -top-16
    -right-16

    w-48
    h-48

    rounded-full

    bg-violet-500/10

    blur-3xl
  "
  />

  {/* Header */}
  <div className="relative flex items-center justify-between mb-6">
    <div>
      <p className="text-sm text-violet-600 font-medium">
        ATS Analytics
      </p>

      <h3
        className="
        text-xl
        font-bold

        text-slate-800
        dark:text-white

        mt-1
      "
      >
        ATS Distribution
      </h3>
    </div>

    <div
      className="
      w-12
      h-12

      rounded-2xl

      bg-violet-100
      dark:bg-violet-500/15

      flex
      items-center
      justify-center
    "
    >
      <Brain
        size={20}
        className="text-violet-600"
      />
    </div>
  </div>

  {/* Chart */}
  <div className="relative ">
    <ResponsiveContainer
      width="100%"
      height={260}
    >
      <PieChart>
        <Pie
          data={data}
          innerRadius={75}
          outerRadius={100}
          paddingAngle={4}
          dataKey="value"
        >
          {data.map(
            (entry, index) => (
              <Cell
                key={index}
                fill={
                  COLORS[index]
                }
              />
            )
          )}
        </Pie>

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>

    {/* Center Score */}
    <div
      className="
      absolute
      inset-0

      flex
      flex-col
      items-center
      justify-center

      pointer-events-none
    "
    >
      <h2
        className="
        text-3xl
        font-bold

        text-slate-800
        dark:text-white
      "
      >
        82%
      </h2>

      <p
        className="
        text-xs
        text-slate-500
        dark:text-slate-400
      "
      >
        Avg ATS
      </p>
    </div>
  </div>

  {/* Legend */}
  <div className="space-y-3 mt-4">
    {data.map((item, index) => (
      <div
        key={item.name}
        className="
        flex
        items-center
        justify-between

        p-3

        rounded-2xl

        bg-slate-50
        dark:bg-slate-800/60
      "
      >
        <div className="flex items-center gap-3">
          <div
            className="
            w-3
            h-3
            rounded-full
          "
            style={{
              backgroundColor:
                COLORS[index],
            }}
          />

          <span
            className="
            text-sm

            text-slate-700
            dark:text-slate-300
          "
          >
            {item.name}
          </span>
        </div>

        <span
          className="
          font-semibold

          text-slate-800
          dark:text-white
        "
        >
          {item.value}%
        </span>
      </div>
    ))}
  </div>

  {/* Footer */}
  <div
    className="
    mt-6
    pt-4

    border-t
    border-slate-100
    dark:border-slate-800
  "
  >
    <div className="flex items-center gap-2">
      <TrendingUp
        size={16}
        className="text-emerald-500"
      />

      <span
        className="
        text-sm

        text-slate-500
        dark:text-slate-400
      "
      >
        ATS quality improved by 8% this month
      </span>
    </div>
  </div>
</div>


);
}

export default ATSDonutChart;
