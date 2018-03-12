import { StyleSheet } from 'react-native';

import Colors from './Colors';
import Variables from './Variables';

export default StyleSheet.create({
  errorInput: {
    borderColor: Colors.ERROR,
  },
  errorIcon: {
    color: Colors.ERROR,
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
    marginBottom: Variables.SpacingBottom,
  },
  inputStyle: {
    color: Colors.WHITE,
    backgroundColor: 'transparent',
    fontSize: 14,
    fontWeight: '500',
  },
});
