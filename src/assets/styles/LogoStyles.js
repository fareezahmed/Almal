import { StyleSheet } from 'react-native';

import Colors from './Colors';
import { circle } from './GlobalStyles';

const TRANS_LEVEL1 = 'rgba(255, 255, 255, 0.3)';
const TRANS_LEVEL2 = 'rgba(255, 255, 255, 0.6)';

const circle1Size = 260;
const circle2Size = 230;
const circle3Size = 200;

export default StyleSheet.create({
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
});
