import { StyleSheet } from 'react-native';

import Variables from './Variables';
import Colors from './Colors';
import { formStyle, alignment } from './GlobalStyles';

const signUpForm = formStyle

const { row, flex1 } = alignment;

export default StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 20,
  },
  pageTitle: {
    width: '100%',
    paddingBottom: Variables.Spacing,
    paddingHorizontal: Variables.Spacing,
  },
  fromWrapper: {
    width: '100%',
  },
  signUpForm,
  row,
  flex1,
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
