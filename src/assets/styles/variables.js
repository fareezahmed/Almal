import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

export default {
  // Window Dimensions
  Screen: {
    height: screenHeight,
    width: screenWidth,

    widthHalf: screenWidth * 0.5,
    widthThird: screenWidth * 0.333,
    widthTwoThirds: screenWidth * 0.666,
    widthQuarter: screenWidth * 0.25,
    widthThreeQuarters: screenWidth * 0.75,
  },

  Spacing: 16,
  SpacingSml: 8,
  SpacingDouble: 32,
  SpacingBottom: 24,

  baseFontSize: 12,
  H1FontSize: 32,
  H2FontSize: 18,
  H3FontSize: 15,

  IconSize: 25,
  IconSizeSml: 25,

  bg: 'bg.png',
  bgWithGradient: 'bg-with-gradient.png',
  logo: '../assets/img/logo.png',
  logoText: 'logo-text.png',
};
