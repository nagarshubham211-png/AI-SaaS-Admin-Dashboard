import {
  ChevronDown,
  TrendingDown,
  Users,
} from "lucide-react";

const funnel = [
  {
    stage: "Applied",
    value: 1200,
    percentage: "100%",
    color: "from-violet-500 to-purple-500",
    width: "100%",
  },
  {
    stage: "Reviewed",
    value: 850,
    percentage: "71%",
    color: "from-blue-500 to-cyan-500",
    width: "85%",
  },
  {
    stage: "Shortlisted",
    value: 420,
    percentage: "35%",
    color: "from-emerald-500 to-green-500",
    width: "70%",
  },
  {
    stage: "Interviewed",
    value: 180,
    percentage: "15%",
    color: "from-orange-500 to-amber-500",
    width: "55%",
  },
  {
    stage: "Hired",
    value: 64,
    percentage: "5.3%",
    color: "from-pink-500 to-rose-500",
    width: "40%",
  },
];

function HiringFunnel() {
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

        bg-violet-500/10

        blur-3xl
      "
      />

      {/* Header */}
      <div className="relative flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-violet-600 font-medium">
            Pipeline Analytics
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
            Hiring Funnel
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
          <Users
            size={22}
            className="text-violet-600"
          />
        </div>
      </div>

      {/* Summary */}
      <div
        className="
        mb-8

        p-4

        rounded-2xl

        bg-slate-50
        dark:bg-slate-800/60

        flex
        justify-between
        items-center
      "
      >
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Overall Conversion
          </p>

          <h4 className="text-2xl font-bold text-slate-800 dark:text-white">
            5.3%
          </h4>
        </div>

        <div className="flex items-center gap-2 text-orange-500">
          <TrendingDown size={16} />
          <span className="font-semibold">
            Funnel Drop-Off
          </span>
        </div>
      </div>

      {/* Funnel */}
      <div className="space-y-3">
        {funnel.map((item, index) => (
          <div
            key={item.stage}
            className="flex flex-col items-center"
          >
            <div
              className={`
                bg-gradient-to-r
                ${item.color}

                text-white

                rounded-2xl

                px-5
                py-4

                flex
                justify-between
                items-center

                transition-all
                duration-300

                hover:scale-[1.02]
                hover:shadow-xl
              `}
              style={{
                width: item.width,
              }}
            >
              <div>
                <p className="text-white/80 text-xs">
                  {item.stage}
                </p>

                <h4 className="font-bold text-lg">
                  {item.value.toLocaleString()}
                </h4>
              </div>

              <span
                className="
                px-3
                py-1

                rounded-full

                bg-white/20

                text-sm
                font-semibold
              "
              >
                {item.percentage}
              </span>
            </div>

            {index !== funnel.length - 1 && (
              <ChevronDown
                size={18}
                className="
                my-1

                text-slate-400
                animate-bounce
              "
              />
            )}
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
        <p
          className="
          text-sm

          text-slate-500
          dark:text-slate-400
        "
        >
          Based on last 30 days recruitment activity
        </p>
      </div>
    </div>
  );
}

export default HiringFunnel;