import { useState } from "react";
import {
  Search,
  MoreHorizontal,
} from "lucide-react";

import { candidates } from "../../data/candidatesData";
import CandidateDrawer from "../ui/CandidateDrawer";

function CandidatesTable() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("All");
  const [selectedCandidate, setSelectedCandidate] =
    useState(null);
  const [drawerOpen, setDrawerOpen] =
    useState(false);

  const filteredCandidates = candidates.filter(
    (candidate) => {
      const matchSearch = candidate.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "All" ||
        candidate.status === statusFilter;

      return matchSearch && matchStatus;
    }
  );

  const statusStyles = {
    Shortlisted:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400",

    Review:
      "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400",

    Pending:
      "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400",
  };

  const getScoreColor = (score) => {
    if (score >= 85)
      return "from-emerald-500 to-green-500";

    if (score >= 70)
      return "from-amber-500 to-yellow-500";

    return "from-red-500 to-rose-500";
  };

  return (
    <div
      className="
        bg-white
        dark:bg-slate-900

        rounded-[32px]

        border
        border-slate-100
        dark:border-slate-800

        shadow-lg
        dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)]

        p-6
        mt-8

        transition-all
        duration-300
      "
    >
      {/* Header */}
     <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <div>
          <h3
            className="
              text-2xl
              font-bold
              text-slate-800
              dark:text-white
            "
          >
            Candidate Pipeline
          </h3>

          <p
            className="
              text-slate-500
              dark:text-slate-400
              mt-1
            "
          >
            AI-powered candidate tracking
          </p>
        </div>

       <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
         <div className="relative flex-1">
            <Search
              size={18}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              placeholder="Search candidate..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
               pl-10
pr-4
py-3
w-full
sm:w-72
rounded-2xl

                border
                border-slate-200
                dark:border-slate-700

                bg-white
                dark:bg-slate-800

                text-slate-800
                dark:text-slate-200

                outline-none

                focus:ring-2
                focus:ring-violet-500/30
              "
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
            
  className="
    w-full
    sm:w-auto
    px-4
    py-3
    rounded-2xl
    border
    border-slate-200
    dark:border-slate-700
    bg-white
    dark:bg-slate-800
    text-slate-700
    dark:text-slate-200
    outline-none
  "
>
            <option>All</option>
            <option>Shortlisted</option>
            <option>Review</option>
            <option>Pending</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-800">
              <th className="pb-4 text-left text-slate-500 dark:text-slate-400">
                #
              </th>

              <th className="pb-4 text-left text-slate-500 dark:text-slate-400">
                Candidate
              </th>

              <th className="pb-4 text-left text-slate-500 dark:text-slate-400">
                Role
              </th>

              <th className="pb-4 text-left text-slate-500 dark:text-slate-400">
                ATS Score
              </th>

              <th className="pb-4 text-left text-slate-500 dark:text-slate-400">
                Status
              </th>

              <th className="pb-4"></th>
            </tr>
          </thead>

          <tbody>
            {filteredCandidates.map(
              (candidate, index) => (
                <tr
                  key={candidate.id}
                  onClick={() => {
                    setSelectedCandidate(candidate);
                    setDrawerOpen(true);
                  }}
                  className="
    cursor-pointer

    border-b
    border-slate-100
    dark:border-slate-800

    hover:bg-slate-50
    dark:hover:bg-slate-800/50

    transition-all
  "
                >
                  <td className="py-5 font-semibold text-slate-400 dark:text-slate-500">
                    {index + 1}
                  </td>

                  <td>
                    <div className="flex items-center gap-4">
                      <div
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

                          font-semibold
                        "
                      >
                        {candidate.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>

                      <div>
                        <h4
                          className="
                            font-semibold
                            text-slate-800
                            dark:text-white
                          "
                        >
                          {candidate.name}
                        </h4>

                        <p
                          className="
                            text-sm
                            text-slate-500
                            dark:text-slate-400
                          "
                        >
                          AI Match Score:{" "}
                          {candidate.ats + 4}%
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="font-medium text-slate-700 dark:text-slate-300">
                    {candidate.role}
                  </td>

                  <td>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-28 h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                          <div
                            className={`
            h-2
            rounded-full
            bg-gradient-to-r
            ${getScoreColor(candidate.ats)}
          `}
                            style={{
                              width: `${candidate.ats}%`,
                            }}
                          />
                        </div>

                        <span className="font-medium text-slate-700 dark:text-slate-300">
                          {candidate.ats}%
                        </span>
                      </div>

                      {candidate.ats >= 85 ? (
                        <span
                          className="
          inline-flex
          items-center
          gap-1
          px-2
          py-1
          rounded-lg
          text-xs
          font-medium

          bg-emerald-100
          text-emerald-700

          dark:bg-emerald-500/20
          dark:text-emerald-400
        "
                        >
                          ⭐ Strong Match
                        </span>
                      ) : (
                        <span
                          className="
          inline-flex
          items-center
          gap-1
          px-2
          py-1
          rounded-lg
          text-xs
          font-medium

          bg-amber-100
          text-amber-700

          dark:bg-amber-500/20
          dark:text-amber-400
        "
                        >
                          ⚠ Needs Review
                        </span>
                      )}
                    </div>
                  </td>

                  <td>
                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-sm
                        font-medium
                        ${statusStyles[candidate.status]}
                      `}
                    >
                      {candidate.status}
                    </span>
                  </td>

                  <td>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="
      w-10
      h-10

      rounded-xl

      hover:bg-slate-100
      dark:hover:bg-slate-800

      text-slate-500
      dark:text-slate-400

      flex
      items-center
      justify-center

      transition
    "
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <CandidateDrawer
          candidate={selectedCandidate}
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Showing {filteredCandidates.length} candidates
        </p>

        <button
          className="
            px-4
            py-2

            rounded-xl

            bg-gradient-to-r
            from-violet-500
            to-blue-500

            text-white
            text-sm

            hover:scale-105
            transition-all
          "
        >
          View All
        </button>
      </div>
    </div>
  );
}

export default CandidatesTable;