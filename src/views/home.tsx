/*
 * @Author: shawicx d35f3153@proton.me
 * @Date: 2025-02-13 21:49:40
 * @LastEditors: shawicx d35f3153@proton.me
 * @LastEditTime: 2025-03-25 20:16:59
 * @Description: 
 */
import { FaGithub, FaEnvelope, FaPhone, FaGraduationCap, FaCode } from 'react-icons/fa';
import { SiReact, SiTypescript, SiVite, SiTailwindcss, SiNodedotjs } from 'react-icons/si';
import InfoField from '^/components/InfoField';

import './home.scss';

import type { ReactNode } from 'react';

interface SkillItem {
  name: string;
  icon: ReactNode;
  color: string;
}

const skills: SkillItem[] = [
  { name: 'React', icon: <SiReact/>, color: '#61DAFB' },
  { name: 'TypeScript', icon: <SiTypescript/>, color: '#3178C6' },
  { name: 'Vite', icon: <SiVite/>, color: '#646CFF' },
  { name: 'Tailwind', icon: <SiTailwindcss/>, color: '#06B6D4' },
  { name: 'Node.js', icon: <SiNodedotjs/>, color: '#339933' },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16 px-4">
      <div className="max-w-4xl w-full backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-xl p-8 border border-white/20">
        {/* 个人信息部分 */}
        <div className="flex flex-col items-start gap-6">
          <div>
            <h1 className="text-4xl font-bold text-[#f43f5e] mb-2">肖昌旭</h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-6">前端工程师</h2>
            
            {/* 基本信息 */}
            <div className="space-y-3">
              <InfoField
                icon={<FaPhone />}
                value="13576714915"
              />
              <InfoField
                icon={<FaEnvelope />}
                value={
                  <a
                    href="mailto:dev.rehab498@passinbox.com"
                    className="text-[#f43f5e] hover:underline"
                  >
                    dev.rehab498@passinbox.com
                  </a>
                }
              />
              <InfoField
                icon={<FaGithub />}
                value={
                  <a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f43f5e] hover:underline"
                  >
                    https://github.com/shawicx
                  </a>
                }
              />
              <InfoField
                icon={<FaGraduationCap />}
                value="南昌大学科学技术学院 · 计算机科学与技术"
              />
            </div>
          </div>

          {/* 个人简介 */}
          <div className="w-full">
            <h3 className="text-2xl font-semibold mb-4 text-[#f43f5e]">关于我</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              热爱技术、追求创新的前端工程师。擅长使用现代前端技术栈构建高性能、可扩展的 Web 应用。
              具有良好的团队协作能力和解决问题的能力，持续关注前端领域的新技术和最佳实践。
            </p>
          </div>

          {/* 技能标签 */}
          <div className="w-full">
            <h3 className="text-2xl font-semibold mb-4 text-[#f43f5e]">技能</h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-card flex items-center gap-2 px-4 py-2 backdrop-blur-sm bg-white/60 dark:bg-gray-700/60 rounded-full border border-white/20"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                  <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}