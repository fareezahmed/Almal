import { StyleSheet } from 'react-native';

import Variables from './Variables';
import { centerContainWrapper } from './GlobalStyles';

const textWrapper = centerContainWrapper;

export default StyleSheet.create({
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
