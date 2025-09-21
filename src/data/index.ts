/*
 * @Author: shawicx d35f3153@proton.me
 * @Date: 2025-01-24
 * @Description: 静态数据配置
 */

import React from 'react';
import { FaGithub, FaEnvelope, FaPhone, FaGraduationCap } from 'react-icons/fa';
import { SiReact, SiTypescript, SiVite, SiTailwindcss, SiNodedotjs } from 'react-icons/si';
import type { PersonalInfo, SkillItem, Experience, Project, ContactInfo } from '../types';

// 个人信息
export const personalInfo: PersonalInfo = {
  name: '肖昌旭',
  title: '前端工程师',
  phone: '13576714915',
  email: 'dev.rehab498@passinbox.com',
  github: 'https://github.com/shawicx',
  education: '南昌大学科学技术学院 · 计算机科学与技术',
  bio: '热爱技术、追求创新的前端工程师。擅长使用现代前端技术栈构建高性能、可扩展的 Web 应用。具有良好的团队协作能力和解决问题的能力，持续关注前端领域的新技术和最佳实践。',
};

// 联系方式
export const contactInfo: ContactInfo[] = [
  {
    icon: React.createElement(FaPhone),
    value: personalInfo.phone,
    type: 'phone',
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: React.createElement(FaEnvelope),
    value: (
      React.createElement('a', {
        href: `mailto:${personalInfo.email}`,
        className: "text-[#f43f5e] hover:underline"
      }, personalInfo.email)
    ),
    type: 'email',
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: React.createElement(FaGithub),
    value: (
      React.createElement('a', {
        href: personalInfo.github,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-[#f43f5e] hover:underline"
      }, personalInfo.github)
    ),
    type: 'github',
    href: personalInfo.github,
  },
  {
    icon: React.createElement(FaGraduationCap),
    value: personalInfo.education,
    type: 'location',
  },
];

// 技能列表
export const skills: SkillItem[] = [
  { 
    name: 'React', 
    icon: React.createElement(SiReact), 
    color: '#61DAFB',
    level: 5,
    category: 'frontend',
  },
  { 
    name: 'TypeScript', 
    icon: React.createElement(SiTypescript), 
    color: '#3178C6',
    level: 4,
    category: 'language',
  },
  { 
    name: 'Vite', 
    icon: React.createElement(SiVite), 
    color: '#646CFF',
    level: 4,
    category: 'tool',
  },
  { 
    name: 'Tailwind', 
    icon: React.createElement(SiTailwindcss), 
    color: '#06B6D4',
    level: 5,
    category: 'css',
  },
  { 
    name: 'Node.js', 
    icon: React.createElement(SiNodedotjs), 
    color: '#339933',
    level: 3,
    category: 'backend',
  },
];

// 工作经历
export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'XX科技有限公司',
    position: '前端开发工程师',
    period: '2023.01 - 至今',
    location: '上海',
    responsibilities: [
      '负责公司核心产品的前端开发工作',
      '参与技术选型和架构设计',
      '优化页面性能，提升用户体验',
      '指导初级开发人员，参与代码评审',
    ],
    achievements: [
      '将首页加载时间优化了50%',
      '建立了完整的组件库和开发规范',
      '主导了多个重要项目的前端开发',
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    id: 'exp-2',
    company: 'YY互联网公司',
    position: '前端开发实习生',
    period: '2022.06 - 2022.12',
    location: '深圳',
    responsibilities: [
      '协助完成公司官网和管理后台的开发',
      '学习和实践现代前端开发技术',
      '参与团队代码审查和技术讨论',
    ],
    achievements: [
      '独立完成了用户管理模块的开发',
      '学习掌握了React生态系统',
    ],
    technologies: ['Vue.js', 'JavaScript', 'Element UI'],
  },
];

// 项目经验
export const projects: Project[] = [
  {
    id: 'proj-1',
    name: '企业级后台管理系统',
    description: '基于React + TypeScript构建的现代化后台管理系统，包含用户管理、权限控制、数据可视化等功能。',
    period: '2023.03 - 2023.08',
    techStack: ['React', 'TypeScript', 'Ant Design', 'Redux Toolkit', 'React Query'],
    contributions: [
      '设计并实现了灵活的权限管理系统',
      '开发了可复用的表格和表单组件库',
      '集成了ECharts实现数据可视化功能',
      '优化了代码分割和懒加载，提升了应用性能',
    ],
    status: 'completed',
    category: 'web',
    url: 'https://example.com',
  },
  {
    id: 'proj-2',
    name: '电商平台前端重构',
    description: '对老旧的电商平台进行现代化重构，提升用户体验和开发效率。',
    period: '2023.09 - 2023.12',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    contributions: [
      '使用Next.js重构整个前端应用',
      '实现了SSR和SEO优化',
      '添加了流畅的页面动画效果',
      '建立了完整的测试体系',
    ],
    status: 'completed',
    category: 'web',
    github: 'https://github.com/example/project',
  },
  {
    id: 'proj-3',
    name: '移动端H5应用',
    description: '响应式的移动端H5应用，支持多种交互功能和离线使用。',
    period: '2024.01 - 进行中',
    techStack: ['React', 'TypeScript', 'PWA', 'Vite'],
    contributions: [
      '实现了完整的PWA功能',
      '优化了移动端触摸交互体验',
      '集成了多种第三方服务',
    ],
    status: 'in-progress',
    category: 'mobile',
  },
];

// 页面路由配置
export const routes = [
  { path: '/', name: '个人信息' },
  { path: '/experience', name: '工作经历' },
  { path: '/projects', name: '项目经验' },
];