/*
 * @Author: shawicx d35f3153@proton.me
 * @Date: 2025-03-02 10:20:00
 * @Description: Navigation component
 */
import { Link, useLocation } from "react-router-dom";
import "./index.scss";

export default function Navigation() {
  const location = useLocation();
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`nav-link ${location.pathname === "/" ? "text-[#f43f5e]" : "text-gray-600 dark:text-gray-300"}`}
            >
              个人信息
            </Link>
            <Link
              to="/experience"
              className={`nav-link ${location.pathname === "/experience" ? "text-[#f43f5e]" : "text-gray-600 dark:text-gray-300"}`}
            >
              工作经历
            </Link>
            <Link
              to="/projects"
              className={`nav-link ${location.pathname === "/projects" ? "text-[#f43f5e]" : "text-gray-600 dark:text-gray-300"}`}
            >
              项目经验
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
