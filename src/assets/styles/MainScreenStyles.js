import { StyleSheet } from 'react-native';

import Colors from './Colors';
import { secondaryMain } from './GlobalStyles';

const main = secondaryMain

export default StyleSheet.create({
  fromWrapper: {
    width: '100%',
  },
  main,
  listStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellStyle: {
    width: '100%',
    paddingTop: 0,
    paddingLeft: 15,
    paddingRight: 15,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.TRANS_LEVEL1,
  },
});
