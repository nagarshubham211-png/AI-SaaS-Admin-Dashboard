import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import {
  PieChart as PieChartIcon,
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

function ATSDistribution() {
  return (
    <div
      className="
      relative
      overflow-hidden

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
        -top-20
        -right-20

        w-56
        h-56

        rounded-full

        bg-blue-500/10

        blur-3xl
      "
      />

      {/* Header */}
      <div className="relative flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-blue-600 font-medium">
            Score Analytics
          </p>

          <h3
            className="
            text-2xl
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

          bg-blue-100
          dark:bg-blue-500/15

          flex
          items-center
          justify-center
        "
        >
          <PieChartIcon
            size={22}
            className="text-blue-600"
          />
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-[280px] ">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={data}
              innerRadius={75}
              outerRadius={105}
              paddingAngle={5}
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
            
            <Tooltip
              wrapperStyle={{
                zIndex: 9999,
                maxWidth: "160px",
              }}
              contentStyle={{
                borderRadius: "16px",
                border: "none",
                background: "#0f172a",
                color: "#fff",
              }}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center */}
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
            text-4xl
            font-bold

            text-slate-800
            dark:text-white
          "
          >
            82%
          </h2>

          <p
            className="
            text-sm

            text-slate-500
            dark:text-slate-400
          "
          >
            Avg ATS
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3 mt-2">
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
                ATS {item.name}
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

        flex
        items-center
        gap-2
      "
      >
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
          High-quality candidates increased by 11%
        </span>
      </div>
    </div>
  );
}

export default ATSDistribution;