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

  baseFontSize: 13,
  H1FontSize: 35,
  H3FontSize: 17,

  bg: 'bg.png',
  bgWithGradient: 'bg-with-gradient.png',
  logo: '../assets/img/logo.png',
  logoText: 'logo-text.png',
};
