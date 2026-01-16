"use client";

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, style, className }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: "100%",
      ...style,
    }
  };

  return (
    <Lottie {...defaultOptions} className={className} />
  );
};

export default AnimationLottie;