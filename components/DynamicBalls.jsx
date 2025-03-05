import React from "react";
import { motion } from 'framer-motion';

const DynamicBalls = ({ top, left,backgroundImage,width, height,animate,zIndex,scaleVar}) => {
  const ballStyle = {
    position: 'absolute',
    top,
    left,
    backgroundImage,
    width,
    height,
    zIndex,
    // transform: `scale(var(${scaleVar},0.1))`,
  };
  const animatedStyle = {
    ...animate,
    scale: parseFloat(getComputedStyle(document.documentElement).getPropertyValue(scaleVar)),
  };
    return (
      <motion.div
        className="blue-ball"
        style={ ballStyle }
        animate={animatedStyle}
        transition={{duration:7,repeat:Infinity,repeatType:"mirror"}}
      

      ></motion.div>
    );
  };

export default DynamicBalls