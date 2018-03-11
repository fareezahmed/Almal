import { StyleSheet } from 'react-native';

import Variables from './Variables';
import { main } from './GlobalStyles';

export default StyleSheet.create({
  main,
  pageTitle: {
    width: '100%',
    paddingBottom: Variables.Spacing,
    paddingHorizontal: Variables.Spacing,
  },
  footerWrapper: {
    alignItems: 'center',
    paddingVertical: Variables.Spacing,
    paddingHorizontal: Variables.Spacing,
  },
});
