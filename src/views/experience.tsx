/*
 * @Author: shawicx d35f3153@proton.me
 * @Date: 2025-01-24
 * @Description: 工作经历页面组件
 */
import { experiences } from "^/data";

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#f43f5e]">
        工作经历
      </h1>
      <div className="relative">
        {/* 时间轴线 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#f43f5e]"></div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex items-center mb-8 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
          >
            {/* 时间节点 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#f43f5e] rounded-full"></div>
            {/* 内容卡片 */}
            <div
              className={`w-5/12 ${index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"}`}
            >
              <div className="backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/20">
                <h3 className="text-xl font-bold text-[#f43f5e] mb-2">
                  {exp.company}
                </h3>
                <h4 className="text-lg font-semibold mb-2">{exp.position}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exp.period}
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="mb-1">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
