export const variant = {
  initial: { opacity: 0, x: 400, transition: { duration: 0.5 } },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
  exit: { opacity: 0, x: -400, transition: { duration: 0.5 } },
};
