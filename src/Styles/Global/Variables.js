const SPACING_UNIT = 8;

const spacing = {
  xxsmall: `${SPACING_UNIT/2}px`,
  xsmall: `${SPACING_UNIT}px`,
  small: `${SPACING_UNIT*2}px`,
  medium: `${SPACING_UNIT*4}px`,
  large: `${SPACING_UNIT*6}px`,
  xlarge: `${SPACING_UNIT*8}px`,
  xxlarge: `${SPACING_UNIT*10}px`,
  xxxlarge: `${SPACING_UNIT*12}px`
};

export const space = (amount) => {
  if (spacing[amount]) {
    console.log(spacing[amount]);
    return spacing[amount];
  } else {
    console.log('that\'s not a valid space!')
  }
}
