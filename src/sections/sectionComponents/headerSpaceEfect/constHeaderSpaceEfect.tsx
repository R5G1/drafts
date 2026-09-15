export const spaceAnimation: any = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      delay: custom * 1,
      duration: 2,
    },
  }),
};

export const imgHeaderFrameAnimation: any = {
  hidden: {
    scale: 0,
    rotate: 0,
  },
  visible: (custom: number) => ({
    scale: 1,
    rotate: 45,
    transition: {
      delay: custom * 1,
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
      rotate: { duration: 6, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' },
    },
  }),
};

export const imgHeaderClockAnimation: any = {
  hidden: {
    scale: 0.7,
    rotate: 0,
  },
  visible: (custom: number) => ({
    scale: 1,
    rotate: 360,
    transition: {
      delay: custom * 1,
      duration: 12,
      repeat: Infinity,
      repeatType: 'reverse',
      rotate: { duration: 12, repeat: Infinity },
    },
  }),
};
export const imgHeaderDivisionAnimation: any = {
  hidden: {
    scale: 1,
    rotate: 0,
  },
  visible: (custom: number) => ({
    scale: 1.5,
    opacity: 0,
    transition: {
      delay: custom * 1,
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  }),
};

export const imgHeaderLightAnimation = {
  hidden: {},
  visible: (custom: number) => ({
    rotate: [0, 40, -45, -65, 0],
    transition: {
      delay: custom * 1,
      duration: 12,
      ease: 'linear',
      times: [0, 0.2, 0.65, 0.7, 1],
      repeat: Infinity,
    },
  }),
};
export const imgHeaderPaletteAnimation = {
  hidden: { rotate: 0 },
  visible: (custom: number) => ({
    rotate: [0, 360],
    transition: {
      delay: custom * 1,
      duration: 12,
      ease: 'linear',
      times: [0.2, 0.8],
      repeat: Infinity,
    },
  }),
};
export const imgHeaderplanet1Animation = {
  hidden: {},
  visible: (custom: number) => ({
    x: [0, -50, 0],
    y: [0, 20, 0],
    transition: {
      delay: custom * 1,
      duration: 12,
      ease: 'linear',
      repeat: Infinity,
    },
  }),
};
export const imgHeaderplanet2Animation = {
  hidden: {},
  visible: (custom: number) => ({
    x: [0, 30, 0],
    transition: {
      delay: custom * 1,
      duration: 12,
      ease: 'linear',
      times: [0.2, 0.5, 1],
      repeat: Infinity,
    },
  }),
};
export const imgHeaderplanet3Animation = {
  hidden: {},
  visible: (custom: number) => ({
    rotate: [0, -45, 0],
    transition: {
      delay: custom * 1,
      duration: 12,
      ease: 'linear',
      times: [0.1, 0.5, 1],
      repeat: Infinity,
    },
  }),
};
export const imgHeaderPlusAnimation = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: [0, 1, 1, 0],
    scale: [0, 1.5, 1.7, 1.9],
    transition: {
      delay: custom * 1,
      duration: 12,
      ease: 'easeOut',
      times: [0.4, 0.6, 0.8, 1],
      repeat: Infinity,
    },
  }),
};
export const imgHeaderRocketAnimation: any = {
  hidden: {},
  visible: (custom: number) => ({
    y: [0, -70],

    transition: {
      delay: custom * 1,
      duration: 12,
      ease: 'easeInOut',
      times: [0.1, 0.9],
      repeat: Infinity,
      repeatType: 'reverse',
    },
  }),
};
export const imgHeaderAeroplaneAnimation: any = {
  hidden: {},
  visible: (custom: number) => ({
    scale: [0.5, 1],
    rotate: [0, 45],
    transition: {
      delay: custom * 1,
      duration: 12,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  }),
};
export const imgHeaderElephantAnimation: any = {
  hidden: {},
  visible: (custom: number) => ({
    x: [0, 10],
    rotate: [0, 30],
    transition: {
      delay: custom * 1,
      duration: 6,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  }),
};
export const imgHeaderBalloonAnimation: any = {
  hidden: {},
  visible: (custom: number) => ({
    y: [0, 34],
    transition: {
      delay: custom * 1,
      duration: 12,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  }),
};
