import {
  Trophy,
  TrendingUp,
  Code2,
} from "lucide-react";

const skills = [
  {
    name: "React.js",
    value: 92,
    growth: "+12%",
    color:
      "from-violet-500 to-purple-500",
  },
  {
    name: "Node.js",
    value: 84,
    growth: "+9%",
    color:
      "from-blue-500 to-cyan-500",
  },
  {
    name: "Next.js",
    value: 78,
    growth: "+7%",
    color:
      "from-emerald-500 to-green-500",
  },
  {
    name: "TypeScript",
    value: 71,
    growth: "+5%",
    color:
      "from-orange-500 to-pink-500",
  },
];

function TopSkills() {
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
        -top-16
        -right-16

        w-44
        h-44

        rounded-full

        bg-blue-500/10

        blur-3xl
      "
      />

      {/* Header */}
      <div className="relative flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-blue-600 font-medium">
            Skills Analytics
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
            Top Skills Demand
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
          <Code2
            size={22}
            className="text-blue-600"
          />
        </div>
      </div>

      {/* Top Skill Banner */}
      <div
        className="
        mb-6

        rounded-3xl

        bg-gradient-to-r
        from-violet-600
        via-purple-600
        to-blue-500

        p-5

        text-white
      "
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/80 text-sm">
              Most In-Demand Skill
            </p>

            <h3 className="text-3xl font-bold mt-2">
              React.js
            </h3>
          </div>

          <Trophy size={34} />
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="
            p-4

            rounded-2xl

            bg-slate-50
            dark:bg-slate-800/60

            hover:scale-[1.02]

            transition-all
          "
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <div
                  className="
                  w-8
                  h-8

                  rounded-lg

                  bg-slate-200
                  dark:bg-slate-700

                  flex
                  items-center
                  justify-center

                  text-sm
                  font-bold
                "
                >
                  #{index + 1}
                </div>

                <span
                  className="
                  font-semibold

                  text-slate-800
                  dark:text-white
                "
                >
                  {skill.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <TrendingUp
                  size={14}
                  className="text-emerald-500"
                />

                <span
                  className="
                  text-xs

                  text-emerald-500

                  font-semibold
                "
                >
                  {skill.growth}
                </span>
              </div>
            </div>

            <div className="flex justify-between mb-2">
              <span
                className="
                text-xs

                text-slate-500
                dark:text-slate-400
              "
              >
                Market Demand
              </span>

              <span
                className="
                text-sm

                font-bold

                text-slate-700
                dark:text-white
              "
              >
                {skill.value}%
              </span>
            </div>

            <div
              className="
              h-3

              rounded-full

              bg-slate-200
              dark:bg-slate-700

              overflow-hidden
            "
            >
              <div
                className={`
                  h-full
                  rounded-full

                  bg-gradient-to-r
                  ${skill.color}
                `}
                style={{
                  width: `${skill.value}%`,
                }}
              />
            </div>
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
          Based on 12,540 analyzed resumes
        </p>
      </div>
    </div>
  );
}

export default TopSkills;