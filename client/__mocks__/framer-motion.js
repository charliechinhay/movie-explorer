/* global module */
const React = require("react");

const createMotionComponent = (tag) =>
  React.forwardRef(function MotionComponent(
    { children, whileHover, whileTap, animate, initial, exit, transition, variants, ...props },
    ref,
  ) {
    return React.createElement(tag, { ...props, ref }, children);
  });

const motion = new Proxy(
  {},
  {
    get: (_, tag) => createMotionComponent(tag),
  },
);

const AnimatePresence = ({ children }) => children;

module.exports = { motion, AnimatePresence };
