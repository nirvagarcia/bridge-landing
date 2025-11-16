export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3 },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

export const slideInLeft = {
  initial: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.3 },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem = {
  initial: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.3 },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export const reduceMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.1 } },
};
