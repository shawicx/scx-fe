/*
 * @Author: shawicx d35f3153@proton.me
 * @Date: 2025-03-02 10:20:00
 * @LastEditors: shawicx d35f3153@proton.me
 * @LastEditTime: 2025-03-25 10:05:14
 * @Description: Navigation component
 */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import './index.scss';

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // 首先检查本地存储中的主题设置
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // 如果没有保存的主题设置，则检查系统主题偏好
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', prefersDark ? 'dark' : 'light');
    }

    // 监听系统主题变化
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'text-[#f43f5e]' : 'text-gray-600 dark:text-gray-300'}`}
            >
              个人信息
            </Link>
            <Link
              to="/experience"
              className={`nav-link ${location.pathname === '/experience' ? 'text-[#f43f5e]' : 'text-gray-600 dark:text-gray-300'}`}
            >
              工作经历
            </Link>
            <Link
              to="/projects"
              className={`nav-link ${location.pathname === '/projects' ? 'text-[#f43f5e]' : 'text-gray-600 dark:text-gray-300'}`}
            >
              项目经验
            </Link>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="切换主题"
          >
            {isDark ? (
              <FaSun className="w-5 h-5 text-yellow-500" />
            ) : (
              <FaMoon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}