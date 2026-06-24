import {
  Upload,
  Brain,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Briefcase,
  Target,
} from "lucide-react";

import { useState } from "react";

function ResumeAnalyzer() {
  const [uploaded, setUploaded] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleUpload = (e) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
      setUploaded(true);
    }
  };

  const stats = [
    {
      title: "AI Confidence",
      value: "96%",
      icon: Brain,
    },
    {
      title: "Experience",
      value: "3.8 Years",
      icon: Briefcase,
    },
    {
      title: "Match Score",
      value: "91%",
      icon: Target,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-violet-100
              dark:bg-violet-500/10
              text-violet-600
              text-sm
              font-semibold
            "
          >
            <Brain size={16} />
            AI Resume Intelligence
          </div>

          <h1
            className="
              mt-4
              text-3xl
              md:text-5xl
              font-black
              text-slate-800
              dark:text-white
            "
          >
            Resume Analyzer
          </h1>

          <p
            className="
              mt-3
              text-slate-500
              dark:text-slate-400
              max-w-3xl
            "
          >
            Upload resumes and receive ATS scores,
            hiring recommendations, skill gap analysis,
            candidate fit predictions and AI-powered
            screening insights.
          </p>
        </div>

        <div
          className="
            bg-white
            dark:bg-slate-900
            border
            border-slate-200
            dark:border-slate-800
            rounded-3xl
            p-5
            min-w-[220px]
            shadow-sm
          "
        >
          <p className="text-sm text-slate-500">
            AI Accuracy
          </p>

          <h3 className="text-4xl font-bold text-violet-600 mt-1">
            96%
          </h3>

          <p className="text-sm text-slate-500 mt-2">
            Enterprise Grade Analysis
          </p>
        </div>
      </div>

      {/* Upload Card */}
      <div
        className="
          relative
          overflow-hidden

          bg-white
          dark:bg-slate-900

          border
          border-slate-200
          dark:border-slate-800

          rounded-[32px]
          p-6 md:p-8

          shadow-xl
        "
      >
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-br
            from-violet-500/5
            via-blue-500/5
            to-cyan-500/5

            pointer-events-none
          "
        />

        <label
          className="
            relative
            group

            h-72
            md:h-96

            border-2
            border-dashed
            border-violet-300
            dark:border-violet-800

            rounded-[32px]

            flex
            flex-col
            items-center
            justify-center

            cursor-pointer

            transition-all
            duration-300

            hover:bg-violet-50
            dark:hover:bg-slate-800/50
          "
        >
          <div
            className="
              w-20
              h-20

              rounded-3xl

              bg-gradient-to-br
              from-violet-600
              via-purple-500
              to-blue-500

              text-white

              flex
              items-center
              justify-center

              shadow-xl

              group-hover:scale-110
              transition-all
            "
          >
            <Upload size={34} />
          </div>

          <h3 className="mt-6 text-2xl font-bold dark:text-white">
            Upload Resume PDF
          </h3>

          <p className="text-slate-500 dark:text-slate-400 mt-2 text-center px-6">
            Drag & Drop your resume here or click to
            browse files.
          </p>

          <p className="text-xs text-slate-400 mt-4">
            Supports PDF, DOCX • Max 10MB
          </p>

          <input
            type="file"
            className="hidden"
            onChange={handleUpload}
          />
        </label>

        {fileName && (
          <div
            className="
              mt-6

              flex
              items-center
              gap-3

              bg-slate-50
              dark:bg-slate-800

              rounded-2xl
              p-4
            "
          >
            <FileText
              size={20}
              className="text-violet-500"
            />

            <span className="dark:text-white font-medium">
              {fileName}
            </span>
          </div>
        )}

        {/* Results */}
        {uploaded && (
          <div className="mt-10">
            {/* Result Header */}
            <div className="flex items-center gap-3 mb-8">
              <Brain className="text-violet-600" />

              <h2 className="text-2xl md:text-3xl font-bold dark:text-white">
                AI Analysis Result
              </h2>
            </div>

            {/* Score Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
              {/* ATS Score */}
              <div
                className="
                  relative
                  overflow-hidden

                  bg-gradient-to-br
                  from-violet-600
                  via-purple-600
                  to-blue-500

                  rounded-[32px]
                  p-6

                  text-white
                "
              >
                <div
                  className="
                    absolute
                    -top-10
                    -right-10
                    w-40
                    h-40
                    rounded-full
                    bg-white/10
                  "
                />

                <p className="text-white/80">
                  ATS Score
                </p>

                <h2 className="text-6xl font-black mt-2">
                  87%
                </h2>

                <div className="flex items-center gap-2 mt-4">
                  <TrendingUp size={16} />
                  Excellent Match
                </div>
              </div>

              {stats.map((item) => (
                <div
                  key={item.title}
                  className="
                    bg-white
                    dark:bg-slate-800

                    border
                    border-slate-200
                    dark:border-slate-700

                    rounded-[28px]
                    p-6
                  "
                >
                  <div className="flex justify-between">
                    <p className="text-slate-500">
                      {item.title}
                    </p>

                    <item.icon
                      size={20}
                      className="text-violet-500"
                    />
                  </div>

                  <h3 className="text-4xl font-bold mt-4 dark:text-white">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>

            {/* Match Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 border border-slate-200 dark:border-slate-700">
                <p className="text-slate-500">
                  Keyword Match
                </p>

                <h3 className="text-3xl font-bold mt-2 dark:text-white">
                  93%
                </h3>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 border border-slate-200 dark:border-slate-700">
                <p className="text-slate-500">
                  Skill Relevance
                </p>

                <h3 className="text-3xl font-bold mt-2 dark:text-white">
                  88%
                </h3>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-3xl p-5 border border-slate-200 dark:border-slate-700">
                <p className="text-slate-500">
                  Hiring Probability
                </p>

                <h3 className="text-3xl font-bold mt-2 text-emerald-500">
                  91%
                </h3>
              </div>
            </div>

            {/* Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
              {/* Strengths */}
              <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-[28px] p-6">
                <h3 className="font-bold text-xl dark:text-white">
                  Strengths
                </h3>

                <div className="mt-5 space-y-3">
                  {[
                    "React.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "REST APIs",
                    "Redux Toolkit",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-emerald-600"
                      />

                      <span className="dark:text-white">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Missing Skills */}
              <div className="bg-amber-50 dark:bg-amber-950/20 rounded-[28px] p-6">
                <h3 className="font-bold text-xl dark:text-white">
                  Missing Skills
                </h3>

                <div className="mt-5 space-y-3">
                  {[
                    "Docker",
                    "AWS",
                    "Kubernetes",
                    "CI/CD",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3"
                    >
                      <AlertTriangle
                        size={18}
                        className="text-amber-600"
                      />

                      <span className="dark:text-white">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendation */}
              <div className="bg-violet-50 dark:bg-violet-950/20 rounded-[28px] p-6">
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={20}
                    className="text-violet-600"
                  />

                  <h3 className="font-bold text-xl dark:text-white">
                    AI Recommendation
                  </h3>
                </div>

                <p className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed">
                  Candidate demonstrates strong frontend
                  engineering skills, high ATS
                  compatibility and excellent hiring
                  potential. Recommended for technical
                  interview round.
                </p>
              </div>
            </div>

            {/* Final Decision */}
            <div
              className="
                mt-8

                bg-gradient-to-r
                from-emerald-500
                via-green-500
                to-teal-500

                rounded-[32px]
                p-6 md:p-8

                text-white
              "
            >
              <div className="flex items-center gap-3">
                <ShieldCheck size={24} />

                <h3 className="text-2xl font-bold">
                  Recommended Action
                </h3>
              </div>

              <p className="mt-4 text-white/90 max-w-3xl">
                Shortlist candidate for interview. AI
                predicts high hiring success probability
                with strong technical fit and ATS
                compatibility.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumeAnalyzer;