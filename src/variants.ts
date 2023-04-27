import { TargetAndTransition, Variants } from "framer-motion";

export const animationTitle = {
  initial: {
    opacity: 0.5,
    x: -200,
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
    },
  },
};
export const animationDesc = {
  initial: {
    opacity: 0.5,
    x: -200,
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
export const animationDescSmall = {
  initial: {
    opacity: 0.5,
    x: -200,
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
    },
  },
};
export const animationSubTitle = {
  initial: {
    opacity: 0.5,
    x: -200,
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
    },
  },
};
export const animationImg = {
  initial: {
    opacity: 0.5,
    x: 200,
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
export const headerMenuBtns = {
  initial: {
    opacity: 0.5,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
    },
  },
};
export const headerMenuBtn1 = {
  initial: {
    opacity: 0.5,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
    },
  },
};
export const headerMenuBtn2 = {
  initial: {
    opacity: 0.5,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
    },
  },
};
export const headerMenuBtn3 = {
  initial: {
    opacity: 0.5,
    y: -150,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
    },
  },
};

export const headerMenuTitle = {
  initial: {
    opacity: 0.5,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const headerMenuTitleSmall = {
  initial: {
    opacity: 1,
    x: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0,
    },
  },
};

export const headerMenuBtnDropDown = {
  initial: {
    opacity: 0.5,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const headerMenuBtnDropDownSmall = {
  initial: {
    opacity: 1,
    x: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0,
    },
  },
};

export const MenuDropDown = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
};

export const MenuDropDownBtn: Variants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
  animate: {
    transition: {
      duration: 0.05,
    },
  },
};

export const section2Title = {
  initial: {
    opacity: 0,
    y: -50,
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const section2TitleSmallScreen = {
  initial: {
    opacity: 0,
    y: -10,
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const section2Item1 = {
  initial: {
    opacity: 0,
    x: -50,
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const section2Item1Small = {
  initial: {
    opacity: 0,
    x: -20,
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const section2Item2 = {
  initial: {
    opacity: 0,
    y: -50,
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const section2Item2Small = {
  initial: {
    opacity: 0,
    x: 20,
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const section2Item3 = {
  initial: {
    opacity: 0,
    x: 50,
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const section2Item3Small = {
  initial: {
    opacity: 0,
    x: -20,
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const section3Title = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
export const section3Item = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
export const section4Title = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
export const section4Item1 = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
export const section4Item2 = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
export const section4Item3 = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
export const section4Item4 = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
