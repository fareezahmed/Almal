import { Platform, StyleSheet } from 'react-native';

import Colors from './colors';
import Variables from './variables';
import { circle, coverFullPage, centerContainWrapper } from './globalStyles';

const TRANS_LEVEL1 = 'rgba(255, 255, 255, 0.3)';
const TRANS_LEVEL2 = 'rgba(255, 255, 255, 0.6)';

const circle1Size = 260;
const circle2Size = 230;
const circle3Size = 200;

const container = coverFullPage;
const textWrapper = centerContainWrapper;

export default StyleSheet.create({
  page: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container,
  imageWrapper: {
    backgroundColor: Colors.TRANSPARENT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle,
  firstCircle: {
    backgroundColor: TRANS_LEVEL1,
    width: circle1Size,
    height: circle1Size,
  },
  secondCircle: {
    backgroundColor: TRANS_LEVEL2,
    width: circle2Size,
    height: circle2Size,
  },
  thirdCircle: {
    backgroundColor: Colors.WHITE,
    width: circle3Size,
    height: circle3Size,
  },
  logo: {
    position: 'absolute',
    top: 20,
    width: 180,
    height: 180,
  },
  textWrapper,
  textLogo: {
    width: 200,
    height: 50,
  },
  textContent: {
    width: '100%',
    height: 90,
  },
  tagline: {
    fontFamily: 'open-sans-bold',
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: Variables.baseFontSize,
    fontWeight: 'bold',
    paddingVertical: Variables.SpacingSml,
    paddingHorizontal: Variables.Spacing,
  },
});
