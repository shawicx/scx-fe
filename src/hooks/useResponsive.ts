/*
 * @Author: shawicx d35f3153@proton.me
 * @Date: 2025-01-24
 * @Description: 响应式断点检测Hook
 */

import { useState, useEffect } from 'react';
import { BREAKPOINTS } from '../utils/constants';
import type { BreakpointType } from '../types';

export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const [currentBreakpoint, setCurrentBreakpoint] = useState<BreakpointType>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setWindowSize({ width, height });

      // 确定当前断点
      if (width < BREAKPOINTS.mobile) {
        setCurrentBreakpoint('mobile');
      } else if (width < BREAKPOINTS.tablet) {
        setCurrentBreakpoint('tablet');
      } else if (width < BREAKPOINTS.desktop) {
        setCurrentBreakpoint('desktop');
      } else {
        setCurrentBreakpoint('large');
      }
    };

    // 初始化
    handleResize();

    // 添加事件监听
    window.addEventListener('resize', handleResize);

    // 清理函数
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 便捷的断点检测方法
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';
  const isDesktop = currentBreakpoint === 'desktop' || currentBreakpoint === 'large';
  const isLarge = currentBreakpoint === 'large';

  // 检测是否小于指定断点
  const isBelow = (breakpoint: keyof typeof BREAKPOINTS) => {
    return windowSize.width < BREAKPOINTS[breakpoint];
  };

  // 检测是否大于指定断点
  const isAbove = (breakpoint: keyof typeof BREAKPOINTS) => {
    return windowSize.width >= BREAKPOINTS[breakpoint];
  };

  return {
    windowSize,
    currentBreakpoint,
    isMobile,
    isTablet,
    isDesktop,
    isLarge,
    isBelow,
    isAbove,
  };
};