"use client"
import GitHubCalendar from "react-github-calendar"
import { type FC, useEffect, useState } from "react"

interface Activity {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

const GithubGraph: FC = () => {
  const username = "pradeep-kumavat"
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const data = (contributions: Activity[]): Activity[] => {
    const currentDate = new Date()
    const lastYearDate = new Date()
    lastYearDate.setFullYear(currentDate.getFullYear() - 1)

    return contributions.filter((activity) => {
      const activityDate = new Date(activity.date)
      return activityDate >= lastYearDate && activityDate <= currentDate
    })
  }

  const theme = {
    light: ["#1f2937", "#0e4429", "#006d32", "#26a641", "#39d353"],
    dark: ["#1f2937", "#0e4429", "#006d32", "#26a641", "#39d353"],
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-[35vh] w-full p-8 bg-gray-950 overflow-hidden">
      <div
        className={`w-full max-w-5xl mx-auto space-y-6 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center">
          <h2 className="font-roboto text-3xl font-bold text-gray-100 tracking-tight mb-8 ">
            My GitHub Contributions
          </h2>
        </div>

        <div className="bg-gray-800/50 p-6 md:p-8 shadow-2xl rounded-2xl border border-gray-700/50 transition-all duration-300 hover:border-green-500/50 hover:shadow-green-500/20 hover:scale-[1.01]">
          <div className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                <span className="text-gray-400 text-sm">Activity Overview</span>
              </div>
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-green-400 transition-colors duration-200 hover:underline"
              >
                View Profile →
              </a>
            </div>

            <div className="flex justify-center w-full overflow-x-auto scrollbar-hide">
              <div className="flex justify-center min-w-max px-4">
                <GitHubCalendar
                  username={username}
                  transformData={data}
                  theme={theme}
                  labels={{
                    totalCount: "{{count}} contributions in the last year",
                  }}
                  style={{
                    color: "#9ca3af",
                    fontFamily:
                      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
                  }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-700/50 px-2">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 animate-spin-slow" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                <span>Last updated: {new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GithubGraph

