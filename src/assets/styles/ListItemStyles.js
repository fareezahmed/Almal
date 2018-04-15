import { StyleSheet } from 'react-native';

import Variables from './Variables';
import Colors from './Colors';
import { row, flex1, flex5, baseText } from './GlobalStyles';

export default StyleSheet.create({
  row,
  flex1,
  flex5,
  baseText,
  rowStyle: {
    flexDirection: 'row',
    paddingBottom: 0,
  },
  itemWrapper: {
    paddingBottom: 10,
  },
  item: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    width: '100%',
    borderColor: Colors.SHADOW_COLOR,
    borderWidth: 0.5,
    borderRadius: 2,
    padding: Variables.SpacingSml,
    marginBottom: Variables.SpacingSml,
    shadowColor: Colors.SHADOW_COLOR,
    elevation: 2,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  card: {
    flexDirection: 'row',
  },
  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: Colors.BLACK,
    alignItems: 'flex-start',
  },
  thumbnailImage: {
    width: 35,
    height: 35,
    borderRadius: 35,
  },
  nameStyle: {
    fontSize: 15,
    fontWeight: '400',
  },
  dealTypeStyle: {
    marginTop: 7,
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'right',
  },
  dealAmountStyle: {
    marginTop: 7,
    fontSize: 24,
    paddingLeft: 1,
    fontWeight: '500',
    textAlign: 'right',
  },
  dateStyle: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: '500',
  },
  iconContainerStyles: {
    marginTop: -30,
    alignItems: 'center',
  },
  cardChevronStyle: {
    width: 25,
    height: 25,
    paddingTop: 2,
    paddingLeft: 0,
    paddingRight: 5,
    backgroundColor: Colors.WHITE,
  },
});
