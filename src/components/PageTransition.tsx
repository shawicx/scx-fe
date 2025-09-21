import { motion } from "framer-motion";
import { ReactNode } from "react";
import { AnimationConfig } from "^/types";
import { ANIMATIONS } from "^/utils/constants";

interface PageTransitionProps {
  children: ReactNode;
  variant?: "slide" | "fade" | "scale" | "slideUp";
  duration?: number;
  className?: string;
}

const variants: Record<string, AnimationConfig> = {
  slide: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
};

const PageTransition = ({
  children,
  variant = "slideUp",
  duration = ANIMATIONS.normal,
  className = "",
}: PageTransitionProps) => {
  const animationVariant = variants[variant];

  return (
    <motion.div
      className={className}
      initial={animationVariant.initial}
      animate={animationVariant.animate}
      exit={animationVariant.exit}
      transition={{
        duration: duration / 1000,
        ease: "easeOut",
        type: "tween",
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
