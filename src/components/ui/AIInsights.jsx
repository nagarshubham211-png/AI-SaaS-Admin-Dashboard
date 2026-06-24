import {
Brain,
TrendingUp,
Sparkles,
AlertCircle,
Zap,
} from "lucide-react";

const insights = [
{
title: "ATS Performance",
description:
"Average ATS score increased by 12% this month.",
icon: TrendingUp,
bg: "bg-violet-50 dark:bg-violet-500/10",
iconColor: "text-violet-600",
badge: "+12%",
},
{
title: "Top Skill Trend",
description:
"React.js remains the most demanded skill across resumes.",
icon: Sparkles,
bg: "bg-blue-50 dark:bg-blue-500/10",
iconColor: "text-blue-600",
badge: "Trending",
},
{
title: "Resume Activity",
description:
"Resume uploads increased by 24% compared to last month.",
icon: Brain,
bg: "bg-emerald-50 dark:bg-emerald-500/10",
iconColor: "text-emerald-600",
badge: "+24%",
},
];

function AIInsights() {
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

    w-52
    h-52

    rounded-full

    bg-violet-500/10

    blur-3xl
  "
  />

  {/* Header */}
  <div className="relative flex items-center justify-between mb-6">
    <div>
      <p className="text-sm text-violet-600 font-medium">
        AI Copilot
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
        Smart Insights
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
        size={22}
        className="text-violet-600"
      />
    </div>
  </div>

  {/* AI Score */}
  <div
    className="
    relative
    overflow-hidden

    rounded-3xl

    bg-gradient-to-r
    from-violet-600
    via-purple-600
    to-blue-500

    p-5

    text-white

    mb-6
  "
  >
    <div
      className="
      absolute
      -top-10
      -right-10

      w-28
      h-28

      rounded-full

      bg-white/10
    "
    />

    <div className="relative">
      <div className="flex items-center gap-2">
        <Zap size={16} />

        <span className="text-sm text-white/90">
          AI Confidence Score
        </span>
      </div>

      <h2 className="text-4xl font-bold mt-3">
        96%
      </h2>

      <p className="text-sm mt-2 text-white/80">
        Based on ATS analysis, hiring trends and candidate quality.
      </p>
    </div>
  </div>

  {/* Insights */}
  <div className="space-y-4">
    {insights.map((item) => (
      <div
        key={item.title}
        className={`
          ${item.bg}

          rounded-2xl

          p-4

          border
          border-white
          dark:border-slate-800

          hover:scale-[1.02]

          transition-all
        `}
      >
        <div className="flex justify-between items-start gap-3">
          <div className="flex gap-3">
            <div
              className="
              w-10
              h-10

              rounded-xl

              bg-white
              dark:bg-slate-800

              flex
              items-center
              justify-center
            "
            >
              <item.icon
                size={18}
                className={item.iconColor}
              />
            </div>

            <div>
              <h4
                className="
                font-semibold

                text-slate-800
                dark:text-white
              "
              >
                {item.title}
              </h4>

              <p
                className="
                text-sm

                text-slate-500
                dark:text-slate-400

                mt-1
              "
              >
                {item.description}
              </p>
            </div>
          </div>

          <span
            className="
            text-xs

            px-2
            py-1

            rounded-full

            bg-white
            dark:bg-slate-800

            font-medium
          "
          >
            {item.badge}
          </span>
        </div>
      </div>
    ))}
  </div>

  {/* Recommendation */}
  <div
    className="
    mt-6

    p-5

    rounded-3xl

    bg-amber-50
    dark:bg-amber-500/10

    border
    border-amber-100
    dark:border-amber-500/20
  "
  >
    <div className="flex gap-3">
      <AlertCircle
        size={18}
        className="text-amber-600 mt-1"
      />

      <div>
        <h4
          className="
          font-semibold

          text-slate-800
          dark:text-white
        "
        >
          AI Recommendation
        </h4>

        <p
          className="
          text-sm

          text-slate-600
          dark:text-slate-400

          mt-2
        "
        >
          Prioritize candidates above 85% ATS score.
          Historical data shows 27% higher interview success rates.
        </p>
      </div>
    </div>
  </div>
</div>

);
}

export default AIInsights;
