import { NavLink } from "react-router-dom";
import {
  Sparkles,
  LayoutDashboard,
  Users,
  FileSearch,
  ChevronRight,
  Zap,
  BarChart3,
  Settings,
  X,
  Crown,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Candidates",
    path: "/candidates",
    icon: Users,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Resume Analyzer",
    path: "/resume-analyzer",
    icon: FileSearch,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];




function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <>

      {/* Mobile Overlay */}
      <div
        onClick={() =>
          setSidebarOpen(false)
        }
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
          lg:hidden overflow-y-auto
          transition-all duration-300 ease-out

          ${sidebarOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
          }
        `}
      />

      {/* Sidebar */}
      <aside
        className={`
    fixed
    z-50
    top-0
    left-0

    lg:top-4
    lg:left-4

    h-screen
    lg:h-[calc(100vh-32px)]

    w-72

    bg-white/90
    dark:bg-slate-900/90

    backdrop-blur-2xl

    border-r
    lg:border

    border-slate-200
    dark:border-slate-800

    lg:rounded-[32px]

    shadow-2xl

    transition-all
    duration-300

    flex
    flex-col

    ${sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
          }
  `}
      >
        {/* Glow */}
        <div
          className="
          absolute
          inset-x-0
          top-0
          h-48

          bg-gradient-to-b
          from-violet-500/10
          via-blue-500/5
          to-transparent

          pointer-events-none
        "
        />

        {/* Mobile Close */}
        <button
          onClick={() =>
            setSidebarOpen(false)
          }
          className="
            lg:hidden
            absolute
            top-6
            right-6

            w-10
            h-10

            rounded-xl

            bg-slate-100
            dark:bg-slate-800

            flex
            items-center
            justify-center
          "
        >
          <X size={18} />
        </button>

        {/* Logo */}
        <div
          className="
          p-6
          border-b
          border-slate-100
          dark:border-slate-800
        "
        >
          <div className="flex items-center gap-4">
            <div
              className="
              w-14
              h-14

              rounded-2xl

              bg-gradient-to-br
              from-violet-600
              via-purple-500
              to-blue-500

              flex
              items-center
              justify-center

              text-white

              shadow-xl
            "
            >
              <Sparkles size={22} />
            </div>

            <div>
              <h1
                className="
                font-bold
                text-xl
                text-slate-800
                dark:text-white
              "
              >
                Resulyze AI
              </h1>

              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

                <span
                  className="
                  text-xs
                  text-slate-500
                "
                >
                  Talent Intelligence
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Workspace */}
        <div className="px-4 pt-4">
          <div
            className="
            rounded-2xl

            bg-slate-50
            dark:bg-slate-800/50

            p-4
          "
          >
            <p
              className="
              text-xs
              uppercase
              tracking-wider
              text-slate-500
            "
            >
              Workspace
            </p>

            <h3 className="font-semibold mt-1">
              Hiring Team
            </h3>
          </div>
        </div>

        {/* Navigation */}
       <nav
  className="
  flex-1
  overflow-y-auto
  sidebar-scroll
  p-4
  space-y-2
  mt-2
"
>
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() =>
                setSidebarOpen(false)
              }
              className={({ isActive }) =>
                `
                relative
                flex
                items-center
                justify-between

                px-4
                py-4

                rounded-2xl

                transition-all
                duration-300

                ${isActive
                  ? `
                      bg-gradient-to-r
                      from-violet-500
                      to-blue-500

                      text-white

                      shadow-lg
                    `
                  : `
                      text-slate-700
                      dark:text-slate-300

                      hover:bg-slate-100
                      dark:hover:bg-slate-800

                      hover:translate-x-1
                    `
                }
              `
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div
                      className="
                      absolute
                      left-0
                      top-3
                      bottom-3

                      w-1

                      rounded-r-full

                      bg-white
                    "
                    />
                  )}

                  <div className="flex items-center gap-3">
                    <item.icon size={20} />

                    <span className="font-medium">
                      {item.name}
                    </span>
                  </div>

                  <ChevronRight
                    size={16}
                    className="opacity-60"
                  />
                </>
              )}
            </NavLink>
          ))}


          {/* Usage Card */}
          <div className="px-4">
            <div
              className="
            rounded-3xl

            border
            border-slate-200
            dark:border-slate-800

            p-4
          "
            >
              <div className="flex items-center justify-between">
                <span className="text-sm">
                  Monthly Usage
                </span>

                <span className="text-sm font-semibold">
                  76%
                </span>
              </div>

              <div
                className="
              h-2
              bg-slate-200
              dark:bg-slate-700

              rounded-full
              mt-3
              overflow-hidden
            "
              >
                <div
                  className="
                h-full
                w-[76%]

                bg-gradient-to-r
                from-violet-500
                to-blue-500
              "
                />
              </div>
            </div>
          </div>

        </nav>


        {/* AI Card */}
      <div className="p-4 mt-auto">
          <div
            className="
            rounded-3xl

            bg-gradient-to-br
            from-violet-600
            via-purple-600
            to-blue-500

            p-5

            text-white

            shadow-xl
          "
          >
            <div className="flex items-center justify-between">
              <div
                className="
                w-10
                h-10

                rounded-xl

                bg-white/20

                flex
                items-center
                justify-center
              "
              >
                <Zap size={18} />
              </div>

              <Crown size={18} />
            </div>

            <h3
              className="
              font-semibold
              text-lg
              mt-4
            "
            >
              AI Hiring Assistant
            </h3>

            <p
              className="
              text-sm
              text-white/80
              mt-2
            "
            >
              Analyze resumes and hiring
              trends instantly.
            </p>

            <button
              className="
              mt-4
              w-full
              py-3

              rounded-xl

              bg-white

              text-slate-900

              font-medium

              hover:scale-[1.02]

              transition-all
            "
            >
              Upgrade Pro
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;