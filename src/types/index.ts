/*
 * @Author: shawicx d35f3153@proton.me
 * @Date: 2025-01-24 
 * @Description: 全局类型定义
 */

import type { ReactNode } from 'react';

// 技能项目接口
export interface SkillItem {
  name: string;
  icon: ReactNode;
  color: string;
  level?: number; // 技能等级 1-5
  category?: string; // 技能分类
}

// 工作经历接口
export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  achievements?: string[];
  technologies?: string[];
  location?: string;
}

// 项目经验接口
export interface Project {
  id: string;
  name: string;
  description: string;
  period?: string;
  techStack: string[];
  contributions: string[];
  url?: string;
  github?: string;
  images?: string[];
  status: 'completed' | 'in-progress' | 'planned';
  category?: string;
}

// 个人信息接口
export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  github: string;
  education: string;
  location?: string;
  bio: string;
  avatar?: string;
}

// 联系方式接口
export interface ContactInfo {
  icon: ReactNode;
  value: string | ReactNode;
  type: 'phone' | 'email' | 'github' | 'website' | 'location';
  href?: string;
}

// 响应式断点类型
export type BreakpointType = 'mobile' | 'tablet' | 'desktop' | 'large';

// 页面路由类型
export interface RouteInfo {
  path: string;
  name: string;
  component: React.ComponentType;
  exact?: boolean;
}

// 动画配置类型
export interface AnimationConfig {
  initial: Record<string, any>;
  animate: Record<string, any>;
  exit?: Record<string, any>;
  transition?: Record<string, any>;
}

// 主题配置类型（为未来主题功能预留）
export interface ThemeConfig {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
}