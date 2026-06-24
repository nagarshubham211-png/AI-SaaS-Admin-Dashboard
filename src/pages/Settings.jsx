import {
  Bell,
  Moon,
  Shield,
  User,
  ChevronRight,
  Lock,
  Palette,
  Smartphone,
  Globe,
  CheckCircle2,
} from "lucide-react";

function Settings() {
  const settings = [
    {
      icon: User,
      title: "Profile Settings",
      desc: "Manage personal information and account details",
    },
    {
      icon: Bell,
      title: "Notifications",
      desc: "Control email and push notifications",
    },
    {
      icon: Moon,
      title: "Appearance",
      desc: "Customize dark and light theme",
    },
    {
      icon: Shield,
      title: "Security",
      desc: "Password, sessions and protection",
    },
  ];

  const preferences = [
    {
      icon: Palette,
      title: "Theme Customization",
      status: "Enabled",
    },
    {
      icon: Smartphone,
      title: "Mobile Alerts",
      status: "Active",
    },
    {
      icon: Globe,
      title: "Language",
      status: "English",
    },
    {
      icon: Lock,
      title: "2FA Security",
      status: "Protected",
    },
  ];

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div
        className="
          relative
          overflow-hidden

          rounded-[36px]

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

        <div className="relative">
          <p className="text-white/80 font-medium">
            Account Management
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold mt-2">
            Settings
          </h1>

          <p className="mt-4 max-w-2xl text-white/80">
            Customize your workspace, manage security,
            notifications and personalize your hiring platform.
          </p>
        </div>
      </div>

      {/* ACCOUNT STATUS */}
      <div
        className="
          bg-white
          dark:bg-slate-900

          rounded-[32px]

          border
          border-slate-100
          dark:border-slate-800

          p-6

          shadow-lg
        "
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              Workspace Status
            </h3>

            <p className="text-slate-500 dark:text-slate-400 mt-2">
              Your account is secure and running normally.
            </p>
          </div>

          <div
            className="
              flex items-center gap-3

              bg-emerald-50
              dark:bg-emerald-500/10

              px-5 py-3

              rounded-2xl
            "
          >
            <CheckCircle2
              className="text-emerald-500"
              size={20}
            />

            <span className="font-medium text-emerald-600">
              All Systems Active
            </span>
          </div>
        </div>
      </div>

      {/* SETTINGS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settings.map((item) => (
          <div
            key={item.title}
            className="
              group

              bg-white
              dark:bg-slate-900

              border
              border-slate-100
              dark:border-slate-800

              rounded-[32px]

              p-6

              shadow-sm

              hover:shadow-xl
              hover:-translate-y-1

              transition-all
              duration-300
            "
          >
            <div className="flex justify-between items-start">
              <div
                className="
                  w-14 h-14

                  rounded-2xl

                  bg-gradient-to-br
                  from-violet-500
                  to-blue-500

                  text-white

                  flex items-center justify-center

                  shadow-lg
                "
              >
                <item.icon size={24} />
              </div>

              <ChevronRight
                size={20}
                className="
                  text-slate-400

                  group-hover:translate-x-1

                  transition-all
                "
              />
            </div>

            <h3 className="text-xl font-bold mt-5 text-slate-800 dark:text-white">
              {item.title}
            </h3>

            <p className="mt-2 text-slate-500 dark:text-slate-400">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* PREFERENCES */}
      <div
        className="
          bg-white
          dark:bg-slate-900

          rounded-[32px]

          border
          border-slate-100
          dark:border-slate-800

          p-6

          shadow-lg
        "
      >
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
            Preferences
          </h3>

          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Manage your platform preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {preferences.map((item) => (
            <div
              key={item.title}
              className="
                flex
                items-center
                justify-between

                p-5

                rounded-2xl

                bg-slate-50
                dark:bg-slate-800
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    w-11 h-11

                    rounded-xl

                    bg-violet-100
                    dark:bg-violet-500/15

                    flex
                    items-center
                    justify-center
                  "
                >
                  <item.icon
                    size={18}
                    className="text-violet-600"
                  />
                </div>

                <span className="font-medium text-slate-800 dark:text-white">
                  {item.title}
                </span>
              </div>

              <span
                className="
                  text-sm

                  px-3 py-1

                  rounded-full

                  bg-emerald-100
                  dark:bg-emerald-500/15

                  text-emerald-600
                "
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Settings;