/*
 * @Author: shawicx d35f3153@proton.me
 * @Date: 2025-01-24
 * @Description: 全局常量定义
 */

// 响应式断点
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
  large: 1536,
} as const;

// 主要颜色
export const COLORS = {
  primary: '#f43f5e',
  secondary: '#64748b',
  background: '#ffffff',
  text: {
    primary: '#1f2937',
    secondary: '#6b7280',
    muted: '#9ca3af',
  },
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
} as const;

// 动画持续时间
export const ANIMATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
  verySlow: 800,
} as const;

// Z-index 层级
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
  notification: 1070,
} as const;

// 路由路径
export const ROUTES = {
  home: '/',
  experience: '/experience',
  projects: '/projects',
} as const;

// 页面标题
export const PAGE_TITLES = {
  home: '个人信息',
  experience: '工作经历', 
  projects: '项目经验',
} as const;

// 外部链接
export const EXTERNAL_LINKS = {
  github: 'https://github.com/shawicx',
  email: 'mailto:dev.rehab498@passinbox.com',
} as const;

// 图片资源
export const ASSETS = {
  favicon: '/favicon.ico',
  // 预留其他资源路径
} as const;

// API 端点（预留）
export const API_ENDPOINTS = {
  // 预留API配置
} as const;