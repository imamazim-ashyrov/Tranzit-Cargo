import { motion } from "framer-motion";

export const AnimatedText = ({ children, duration }) => (
  <motion.div
    initial={{ x: "-60%", y: "15vh", scale: 0.4 }}
    animate={{ x: "0", y: "10vh", scale: 1 }}
    transition={{ duration: duration, delay: 0.4 }}
  >
    {children}
  </motion.div>
);

export const ApparatAnimated = ({ children }) => (
  <motion.div
    initial={{ rotateZ: '330deg', scale: 0.99 }}
    animate={{ rotateZ: '360deg', scale: 1.03 }}
    transition={{
      rotateZ: {duration: 0.3},
      scale: {duration: 1, delay: 0.3}
    }}
  >
    {children}
  </motion.div>
);

export const animateOnAxis_X = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
export const animateOnAxis_X_ToLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
export const animateOnAxis_Y = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
export const animateOnAxis_Y_ToDown = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
