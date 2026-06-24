import {
  Bell,
  Search,
  Moon,
  Sun,
  Settings,
  User,
  LogOut,
  Menu,
} from "lucide-react";

import { useState, useEffect, useRef } from "react";

function Navbar({
  darkMode,
  setDarkMode,
  toggleSidebar,
}) {
  const [showNotifications, setShowNotifications] =
    useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  const userName = "Shubham Sharma";

  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("");


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);



  const notifications = [
    {
      title: "Aarav shortlisted",
      time: "2 min ago",
    },
    {
      title: "Resume uploaded",
      time: "10 min ago",
    },
    {
      title: "Interview scheduled",
      time: "1 hr ago",
    },
    {
      title: "ATS score updated",
      time: "Today",
    },
  ];

  return (





<header
  className="
    fixed
    top-0
    right-0
    left-0
    lg:left-[304px]

    z-50
    h-20

    flex
    items-center
    justify-between

    px-4
    md:px-8
    backdrop-blur-xl
    bg-white/80
    dark:bg-slate-950/80

    border-b
    border-slate-200
    dark:border-slate-800
  "
>
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu */}
        <button
          onClick={toggleSidebar}
          className="
          lg:hidden
          w-11
          h-11
          rounded-xl
          bg-white
          dark:bg-slate-900
          border
          border-slate-200
          dark:border-slate-800
          flex
          items-center
          justify-center
        "
        >
          <Menu size={20} />
        </button>

        {/* Logo */}
        <div className="hidden md:block">
          <div className="flex items-center gap-3">
            <div
              className="
    w-9
    h-9
    rounded-xl
    bg-gradient-to-r
    from-violet-600
    to-blue-500
    flex
    items-center
    justify-center
    text-white
    font-bold
  "
            >
              AI
            </div>

            <h1
              className="
    text-xl
    font-bold
    bg-gradient-to-r
    from-violet-600
    to-blue-500
    bg-clip-text
    text-transparent
  "
            >
              AI Recruiter
            </h1>
          </div>
        </div>

        {/* Search */}
        <div
          className="
          hidden
          md:flex
          items-center
          gap-3
          bg-white/80
          dark:bg-slate-900/80
          backdrop-blur-xl
          px-4
          h-12
          rounded-2xl
          border
          border-slate-200
          dark:border-slate-800
          shadow-sm
         w-[280px]
lg:w-[340px]
xl:w-[400px]
        "
        >
          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            type="text"
            placeholder="Search anything..."
            className="
              flex-1
              bg-transparent
              outline-none
              text-slate-700
              dark:text-slate-200
            "
          />

          <div
            className="
            text-xs
            px-2
            py-1
            rounded-lg
            bg-slate-100
            dark:bg-slate-800
            text-slate-500
          "
          >

          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Mobile Search */}
        <button
          className="
          md:hidden
          w-11
          h-11
          rounded-xl
          bg-white
          dark:bg-slate-900
          border
          border-slate-200
          dark:border-slate-800
          flex
          items-center
          justify-center
        "
        >
          <Search size={18} />
        </button>

        {/* System Status */}
        <div
          className="
          hidden
          xl:flex
          items-center
          gap-2
          px-4
          h-12
          rounded-2xl
          bg-emerald-50
          dark:bg-emerald-950/50
        "
        >
          <div
            className="
            w-2
            h-2
            rounded-full
            bg-emerald-500
            animate-pulse
          "
          />

          <span className="text-sm">
            System Healthy
          </span>
        </div>

        {/* Theme */}
        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
          className="
          h-12
          w-12
          rounded-2xl
          bg-white/80
          dark:bg-slate-900/80
          border
          border-slate-200
          dark:border-slate-800
          flex
          items-center
          justify-center
          hover:scale-105
          transition-all
        "
        >
          {darkMode ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>

        {/* Notification */}
        <div
          ref={notificationRef}
          className="relative"
        >
          <button
            onClick={() =>
              setShowNotifications(
                !showNotifications
              )
            }
            className="
            relative
            h-12
            w-12
            hover:-translate-y-0.5
            hover:shadow-lg
            duration-300
            rounded-2xl
            bg-white/80
            dark:bg-slate-900/80
            border
            border-slate-200
            dark:border-slate-800
            flex
            items-center
            justify-center
          "
          >
            <Bell size={20} />

            <span className="absolute top-2 right-2 flex h-3 w-3">
              <span
                className="
                animate-ping
                absolute
                inline-flex
                h-full
                w-full
                rounded-full
                bg-red-400
                opacity-75
              "
              />

              <span
                className="
                relative
                inline-flex
                rounded-full
                h-3
                w-3
                bg-red-500
              "
              />
            </span>
          </button>

          {showNotifications && (
            <div
              className="
              absolute
              right-0
              mt-3
              w-80
              bg-white
              dark:bg-slate-900
              rounded-3xl
              border
              border-slate-200
              dark:border-slate-800
              shadow-2xl
              overflow-hidden
            "
            >
              <div
                className="
                p-4
                flex
                items-center
                justify-between
                border-b
                border-slate-200
                dark:border-slate-800
              "
              >
                <h3 className="font-semibold">
                  Notifications
                </h3>

                <button
                  className="
                  text-xs
                  text-violet-500
                "
                >
                  Mark all
                </button>
              </div>

              {notifications.map((item) => (
                <div
                  key={item.title}
                  className="
                  px-4
                  py-4
                  hover:bg-slate-50
                  dark:hover:bg-slate-800
                  transition
                "
                >
                  <div className="flex gap-3">
                    <div
                      className="
                        w-2
                        h-2
                        mt-2
                        rounded-full
                        bg-violet-500"
                    />

                    <div>
                      <p className="font-medium">
                        {item.title}
                      </p>

                      <p
                        className="  
                        text-xs
                        text-slate-500
                        mt-1"
                      >
                        {item.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Profile */}
        <div
          ref={profileRef}
          className="relative"
        >
          <button
            onClick={() =>
              setShowProfile(!showProfile)
            }
            className="
            relative
            w-12
            h-12
            rounded-2xl
            bg-gradient-to-r
            from-violet-500
            to-blue-500
            text-white
            flex
            items-center
            justify-center
            font-bold
            cursor-pointer
            shadow-lg
          "
          >
            {initials}

            <span
              className="
              absolute
              -bottom-1
              -right-1
              w-4
              h-4
              rounded-full
              bg-emerald-500
              border-2
              border-white
            "
            />
          </button>

          {showProfile && (
            <div
              className="
      absolute
      right-0
      top-16
      w-60
      transition-all
      bg-white
      dark:bg-slate-900
      rounded-3xl
      border
      border-slate-200
      dark:border-slate-800
      shadow-2xl
      overflow-hidden
      z-50
    "
            >
              <div className="p-4 border-b dark:border-slate-800">
                <p className="font-semibold">
                  Shubham Sharma
                </p>

                <p className="text-xs text-slate-500">
                  Super Admin
                </p>
              </div>

              <button className="w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800">
                <User size={16} />
                Profile
              </button>

              <button className="w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800">
                <Settings size={16} />
                Settings
              </button>

              <button className="w-full px-4 py-3 flex items-center gap-3 hover:bg-red-50 dark:hover:bg-red-950 text-red-500">
                <LogOut size={16} />
                Logout
              </button>
            </div>)}
        </div>
      </div>
    </header >
  );
}

export default Navbar;