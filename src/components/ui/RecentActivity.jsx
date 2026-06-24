import {
  CheckCircle2,
  FileText,
  Calendar,
  Brain,
  Bell,
  ArrowUpRight,
} from "lucide-react";

const activities = [
  {
    title: "Aarav Sharma shortlisted",
    description:
      "Candidate moved to Interview Round",
    time: "2 min ago",
    icon: CheckCircle2,
    color: "bg-emerald-500",
  },
  {
    title: "ATS Score Updated",
    description:
      "Priya Singh reached 91% ATS Score",
    time: "12 min ago",
    icon: Brain,
    color: "bg-violet-500",
  },
  {
    title: "Resume Uploaded",
    description:
      "New Frontend Developer application received",
    time: "25 min ago",
    icon: FileText,
    color: "bg-blue-500",
  },
  {
    title: "Interview Scheduled",
    description:
      "Technical interview fixed for tomorrow",
    time: "1 hour ago",
    icon: Calendar,
    color: "bg-orange-500",
  },
];

function RecentActivity() {
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

        w-52
        h-52

        rounded-full

        bg-emerald-500/10

        blur-3xl
      "
      />

      {/* Header */}
      <div className="relative flex items-center justify-between mb-6">
        <div>
          <p className="text-sm text-emerald-600 font-medium">
            Activity Feed
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
            Recent Activity
          </h3>
        </div>

        <div
          className="
          w-12
          h-12

          rounded-2xl

          bg-emerald-100
          dark:bg-emerald-500/15

          flex
          items-center
          justify-center
        "
        >
          <Bell
            size={22}
            className="text-emerald-600"
          />
        </div>
      </div>

      {/* Live Status */}
      <div
        className="
        mb-6

        flex
        items-center
        justify-between

        rounded-2xl

        bg-slate-50
        dark:bg-slate-800/60

        p-4
      "
      >
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Live Hiring Updates
          </p>

          <h4 className="font-bold text-slate-800 dark:text-white mt-1">
            24 Activities Today
          </h4>
        </div>

        <div className="flex items-center gap-2 text-emerald-500">
          <ArrowUpRight size={16} />
          <span className="font-semibold">
            +18%
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {activities.map((item, index) => (
          <div
            key={index}
            className="
            relative

            flex
            gap-4

            pb-6
          "
          >
            {index !==
              activities.length - 1 && (
              <div
                className="
                absolute

                left-5
                top-10

                w-[2px]
                h-full

                bg-slate-200
                dark:bg-slate-700
              "
              />
            )}

            {/* Icon */}
            <div
              className={`
                w-10
                h-10

                rounded-xl

                ${item.color}

                flex
                items-center
                justify-center

                text-white

                shrink-0

                shadow-lg
              `}
            >
              <item.icon size={18} />
            </div>

            {/* Content */}
            <div
              className="
              flex-1

              p-4

              rounded-2xl

              bg-slate-50
              dark:bg-slate-800/60

              hover:translate-x-1

              transition-all
            "
            >
              <div className="flex justify-between gap-4">
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

                <span
                  className="
                  text-xs

                  whitespace-nowrap

                  text-slate-400
                "
                >
                  {item.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        className="
        mt-2
        pt-4

        border-t
        border-slate-100
        dark:border-slate-800
      "
      >
        <button
          className="
          w-full

          py-3

          rounded-2xl

          bg-gradient-to-r
          from-emerald-500
          to-cyan-500

          text-white

          font-medium

          hover:scale-[1.02]

          transition-all
        "
        >
          View All Activities
        </button>
      </div>
    </div>
  );
}

export default RecentActivity;