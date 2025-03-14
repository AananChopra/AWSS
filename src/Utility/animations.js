export const SlideUp = (delay) => {
    return {
        initial: {
            y: 100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5
            }
        }
    }
}

export const SlideLeft = (delay) => {
    return {
      initial: {
        x: 100,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay,
        },
      },
    };
  };

  
  export const SlideRight = (delay) => {
    return {
      initial: {
        x: -100,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay,
        },
      },
    };
  };