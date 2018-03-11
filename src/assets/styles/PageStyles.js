import { StyleSheet } from 'react-native';

import { coverFullPage } from './GlobalStyles';

const container = coverFullPage;

export default StyleSheet.create({
  page: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container,
});
