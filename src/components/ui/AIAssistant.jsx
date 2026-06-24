import { useState } from "react";
import {
  Bot,
  Send,
  X,
} from "lucide-react";

function AIAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed
          bottom-6
          right-6
          w-16
          h-16
          rounded-full
          bg-gradient-to-r
          from-violet-500
          to-blue-500
          text-white
          shadow-2xl
          flex
          items-center
          justify-center
          hover:scale-110
          transition-all
          z-50
        "
      >
        <Bot size={28} />
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="
            fixed
            bottom-24
            right-6
            w-96
            h-[520px]

            bg-white
            dark:bg-slate-900

            border
            border-slate-200
            dark:border-slate-800

            rounded-[32px]
            shadow-2xl

            overflow-hidden
            z-50
          "
        >
          {/* Header */}
          <div
            className="
              p-5
              bg-gradient-to-r
              from-violet-500
              to-blue-500
              text-white
              flex
              justify-between
              items-center
            "
          >
            <div>
              <h3 className="font-bold">
                AI Hiring Assistant
              </h3>

              <p className="text-xs text-white/80">
                Online
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="p-5 space-y-4">
            <div
              className="
                bg-violet-100
                dark:bg-slate-800
                p-4
                rounded-2xl
                text-sm
              "
            >
              👋 Hi, I'm your AI Hiring Assistant.
              Ask me about ATS scores, resumes,
              candidates or hiring insights.
            </div>

            <div
              className="
                bg-slate-100
                dark:bg-slate-800
                p-4
                rounded-2xl
                text-sm
              "
            >
              Example:
              <br />
              • Show top ATS candidates
              <br />
              • Hiring funnel summary
              <br />
              • Skills demand report
            </div>
          </div>

          {/* Input */}
          <div
            className="
              absolute
              bottom-0
              left-0
              right-0

              p-4
              border-t
              border-slate-200
              dark:border-slate-800

              flex gap-2
            "
          >
            <input
              placeholder="Ask AI..."
              className="
                flex-1
                px-4
                py-3
                rounded-2xl
                border
                border-slate-200
                dark:border-slate-700

                bg-white
                dark:bg-slate-950

                outline-none
              "
            />

            <button
              className="
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
              "
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AIAssistant;