import { StyleSheet } from 'react-native';

import Variables from './Variables';
import Colors from './Colors';
import { formStyle, FullPage } from './GlobalStyles';

const main = FullPage

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
  formStyle,
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
