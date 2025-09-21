/*
 * @Author: shawicx d35f3153@proton.me
 * @Date: 2025-01-24
 * @Description: 优化的技能卡片组件
 */

import { useState } from 'react';
import type { SkillItem } from '../../types';
import './index.scss';

interface SkillCardProps {
  skill: SkillItem;
  showLevel?: boolean;
  onClick?: (skill: SkillItem) => void;
  className?: string;
}

export default function SkillCard({ 
  skill, 
  showLevel = false, 
  onClick,
  className = '' 
}: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    onClick?.(skill);
  };

  const renderLevelStars = () => {
    if (!showLevel || !skill.level) return null;
    
    return (
      <div className="skill-card__level">
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            className={`skill-card__star ${
              index < skill.level! ? 'skill-card__star--filled' : ''
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div
      className={`skill-card ${onClick ? 'skill-card--clickable' : ''} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{ 
        '--skill-color': skill.color,
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      } as React.CSSProperties}
    >
      <div className="skill-card__icon" style={{ color: skill.color }}>
        {skill.icon}
      </div>
      
      <div className="skill-card__content">
        <span className="skill-card__name">{skill.name}</span>
        {renderLevelStars()}
        {skill.category && (
          <span className="skill-card__category">{skill.category}</span>
        )}
      </div>

      {isHovered && (
        <div 
          className="skill-card__glow"
          style={{ backgroundColor: `${skill.color}20` }}
        />
      )}
    </div>
  );
}