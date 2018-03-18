import { StyleSheet } from 'react-native';

import Variables from './Variables';
import Colors from './Colors';
import { main, formStyle } from './GlobalStyles';

const signUpForm = formStyle

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
  signUpForm,
  formLink: {
    width: '100%',
    alignItems: 'flex-end',
    paddingBottom: Variables.SpacingSml,
    paddingRight: Variables.Spacing,
  },
  errorSection: {
    width: '100%',
    height: 48,
  },
  errorMessage: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: Variables.Spacing,
    paddingVertical: Variables.SpacingSml,
    color: Colors.ERROR_SECONDARY,
    textAlign: 'center',
  },
});
