/*
 * @Author: shawicx d35f3153@proton.me
 * @Date: 2025-03-02 10:10:00
 * @LastEditors: shawicx d35f3153@proton.me
 * @LastEditTime: 2025-03-25 10:21:08
 * @Description: Projects page component
 */
import './projects.scss';

interface ProjectItem {
  name: string;
  description: string;
  techStack: string[];
  contributions: string[];
  link?: string;
}

const projects: ProjectItem[] = [
  {
    name: "个人简历网站",
    description: "基于 React + Vite + TypeScript 开发的响应式个人简历网站，支持暗色模式",
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router"],
    contributions: [
      "使用 Vite 构建工具提升开发体验和构建性能",
      "采用 Tailwind CSS 实现响应式设计和现代 UI"
    ],
    link: "https://github.com/username/portfolio"
  },
  {
    name: "企业管理系统",
    description: "基于 React + Ant Design 的企业级管理系统，包含权限管理、数据可视化等功能",
    techStack: ["React", "TypeScript", "Ant Design", "Redux", "ECharts"],
    contributions: [
      "负责系统架构设计和核心模块开发",
      "实现基于 RBAC 的权限管理系统",
      "使用 ECharts 开发数据可视化模块"
    ]
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-32">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#f43f5e]">项目经验</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-white/20"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-[#f43f5e]">{project.name}</h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition-colors"
                >
                  查看项目
                </a>
              )}
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">技术栈</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 backdrop-blur-sm bg-white/60 dark:bg-gray-700/60 rounded-full text-sm border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">主要贡献</h4>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {project.contributions.map((contribution, idx) => (
                  <li key={idx} className="mb-1">{contribution}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}