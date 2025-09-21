/*
 * @Author: shawicx d35f3153@proton.me
 * @Description: InfoField component
 */
import { ReactNode } from "react";

interface InfoFieldProps {
  value: string | ReactNode;
  icon?: ReactNode;
}

export default function InfoField({ value, icon }: InfoFieldProps) {
  return (
    <div className="flex items-center gap-2 text-gray-600">
      {icon && <span className="text-[#f43f5e]">{icon}</span>}
      {/* <span className="font-medium">{label}:</span> */}
      <span>{value}</span>
    </div>
  );
}
