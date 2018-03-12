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
  fromWrapper: {
    width: '100%',
  },
  loginForm: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  formLink: {
    width: '100%',
    alignItems: 'flex-end',
    paddingBottom: Variables.Spacing,
    paddingRight: Variables.Spacing,
  },
});
