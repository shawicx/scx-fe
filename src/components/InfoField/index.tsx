/*
 * @Author: shawicx d35f3153@proton.me
 * @Date: 2025-03-25 10:11:50
 * @LastEditors: shawicx d35f3153@proton.me
 * @LastEditTime: 2025-03-25 10:13:03
 * @Description: 
 */
import { ReactNode } from 'react';

interface InfoFieldProps {
  value: string | ReactNode;
  icon?: ReactNode;
}

export default function InfoField({ value, icon }: InfoFieldProps) {
  return (
    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
      {icon && <span className="text-[#f43f5e]">{icon}</span>}
      {/* <span className="font-medium">{label}:</span> */}
      <span>{value}</span>
    </div>
  );
} 