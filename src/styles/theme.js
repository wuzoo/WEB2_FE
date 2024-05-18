const colors = {
  white: '#FFFFFF',
  black: '#000000',
  gray100: '#F2F2F2',
  gray200: '#ECECEC',
  gray300: '#D8D8D8',
  gray400: '#808080',
  gray500: '#737373',
  gray600: '#666666',
  gray700: '#535353',
  gray800: '#4D4D4D',
  gray900: '#333333',
  boxDrop: 'rgba(42, 42, 42, 0.15)',
};

const FONT = ({ weight, size, height }) => {
  return `
        font-weight:${weight};
        font-size:${size}px;
        line-height:${height}px;
      `;
};

const heading = {
  Head1: FONT({
    weight: 600,
    size: 24,
    height: 38,
  }),
  Head2: FONT({
    weight: 600,
    size: 20,
    height: 32,
  }),
  Head3: FONT({
    weight: 600,
    size: 18,
    height: 30,
  }),
};

const text = {
  Body1: FONT({
    weight: 500,
    size: 18,
    height: 30,
  }),
  Body2: FONT({
    weight: 600,
    size: 16,
    height: 26,
  }),
  Body3: FONT({
    weight: 500,
    size: 16,
    height: 26,
  }),
  Body4: FONT({
    weight: 600,
    size: 14,
    height: 22,
  }),
  Body5: FONT({
    weight: 500,
    size: 14,
    height: 22,
  }),
  Caption1: FONT({
    weight: 400,
    size: 12,
    height: 18,
  }),
  Caption2: FONT({
    weight: 400,
    size: 10,
    height: 16,
  }),
};

export const theme = { heading, text, colors };
