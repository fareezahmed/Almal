import { StyleSheet } from 'react-native';

import Colors from './Colors';
import Variables from './Variables';
import { circle } from './GlobalStyles';

export default StyleSheet.create({
  errorInput: {
    borderColor: Colors.ERROR_SECONDARY,
  },
  errorIcon: {
    color: Colors.ERROR_SECONDARY,
  },
  wrapperStyle: {
    flexDirection: 'row',
    marginLeft: Variables.Spacing,
  },
  iconStyle: {
    marginRight: Variables.Spacing,
  },
  containerStyle: {
    flex: 3,
    borderColor: Colors.TRANS_LEVEL1,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingBottom: Variables.SpacingSml,
    marginBottom: 32,
  },
  lastContainerStyle: {
    marginBottom: 16,
  },
  dropdownStyle: {
    color: Colors.WHITE,
    backgroundColor: 'transparent',
    fontSize: 14,
    fontWeight: '500',
  },
});
