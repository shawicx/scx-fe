/*
 * @Author: shawicx d35f3153@proton.me
 * @Date: 2025-01-24
 * @Description: 统一的加载指示器组件
 */

import './index.scss';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  text?: string;
  className?: string;
}

export default function LoadingSpinner({ 
  size = 'medium', 
  color = '#f43f5e', 
  text,
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };

  return (
    <div className={`loading-spinner ${className}`}>
      <div 
        className={`loading-spinner__circle ${sizeClasses[size]}`}
        style={{ borderTopColor: color }}
      />
      {text && (
        <p className="loading-spinner__text" style={{ color }}>
          {text}
        </p>
      )}
    </div>
  );
}