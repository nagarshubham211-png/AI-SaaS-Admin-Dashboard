import {
  X,
  Mail,
  Briefcase,
  Brain,
  Sparkles,
} from "lucide-react";

function CandidateDrawer({
  candidate,
  isOpen,
  onClose,
}) {
  if (!isOpen || !candidate) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="
          fixed inset-0
          bg-black/40
          backdrop-blur-sm
          z-40
        "
      />

      {/* Drawer */}
      <div
        className="
          fixed right-0 top-0
          h-screen w-[420px]
          bg-white dark:bg-slate-900
          border-l border-slate-200 dark:border-slate-800
          z-50
          p-6
          overflow-y-auto
          shadow-2xl
        "
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold dark:text-white">
            Candidate Profile
          </h2>




          <button
            onClick={onClose}
            className="
              w-10 h-10
              rounded-xl
              hover:bg-slate-100
              dark:hover:bg-slate-800
              flex items-center justify-center
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* Avatar */}
        <div className="mt-8 flex flex-col items-center">
          <div
            className="
              w-24 h-24
              rounded-3xl
              bg-gradient-to-r
              from-violet-500
              to-blue-500
              text-white
              text-3xl
              font-bold
              flex items-center justify-center
            "
          >
            {candidate.name.charAt(0)}
          </div>

          <h3 className="mt-4 text-xl font-bold dark:text-white">
            {candidate.name}
          </h3>

          <p className="text-slate-500">
            {candidate.role}
          </p>
        </div>

        {/* Details */}
        <div className="space-y-4 mt-8">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4">
            <div className="flex gap-3">
              <Mail size={18} />
              <span>{candidate.email}</span>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4">
            <div className="flex gap-3">
              <Briefcase size={18} />
              <span>5+ Years Experience</span>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-4">
            <div className="flex gap-3">
              <Brain size={18} />
              <span>ATS Score: {candidate.ats}%</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-8">
          <h4 className="font-semibold dark:text-white mb-4">
            Skills
          </h4>

          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Node.js",
              "TypeScript",
              "MongoDB",
            ].map((skill) => (
              <span
                key={skill}
                className="
                  px-3 py-2
                  rounded-xl
                  bg-violet-100
                  text-violet-700
                  text-sm
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* AI Recommendation */}
        <div
          className="
            mt-8
            p-5
            rounded-3xl
            bg-gradient-to-r
            from-violet-500
            to-blue-500
            text-white
          "
        >
          <div className="flex gap-3">
            <Sparkles size={20} />

            <div>
              <h4 className="font-semibold">
                AI Recommendation
              </h4>

              <p className="text-sm text-white/90 mt-2">
                Candidate shows strong ATS performance.
                Recommended for interview round.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CandidateDrawer;