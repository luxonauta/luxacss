"use client";

import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { ElementType, ReactNode } from "react";

interface PageTransitionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

const variants = {
  initial: {
    opacity: 0,
    y: 6
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.24,
      ease: [0.36, 0.66, 0.6, 1]
    }
  }
};

const PageTransition = ({
  children,
  className,
  as = "section",
  ...props
}: PageTransitionProps) => {
  const MotionComponent = motion(as);

  return (
    <AnimatePresence>
      <MotionComponent
        initial="initial"
        animate="enter"
        variants={variants}
        className={className}
        {...props}
      >
        {children}
      </MotionComponent>
    </AnimatePresence>
  );
};

export default PageTransition;
