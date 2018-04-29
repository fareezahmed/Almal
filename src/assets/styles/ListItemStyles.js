import { StyleSheet } from 'react-native';

import Variables from './Variables';
import Colors from './Colors';
import { row, flex1, flex5, baseText, boldText } from './GlobalStyles';

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
  cardWrapper: {
    width: '100%',
  },
  card: {
    width: '100%',
    flexDirection: 'row',
  },
  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderColor: Colors.LIGHT_GREY,
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'flex-start',
  },
  thumbnailImage: {
    marginTop: 6,
    marginLeft: 6,
    width: 25,
    height: 25,
  },
  textContainer: {
    flex: 1,
    marginLeft: 7,
  },
  subTextContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  subText: {
    fontSize: 10,
    fontWeight: '500',
    color: Colors.MEDIUM_GREY,
    marginTop: 4,
    marginLeft: 3,
  },
  nameStyle: {
    fontSize: 15,
    fontWeight: '600',
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
    fontSize: 11,
    color: Colors.MEDIUM_GREY,
    fontWeight: '400',
    paddingLeft: 4,
  },
  boldText,
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
  buttonWrapper: {
    marginTop: 10,
    marginRight: 7,
    width: 65,
    height: 27,
    borderRadius: 20,
    paddingTop: 2,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 2,
  },
  buttonText: {
    fontSize: 12,
  },
  expandedTextContainer: {
    flexDirection: 'row',
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.SHADOW_COLOR,
    paddingBottom: 8,
  },
  expandedTitleText: {
    flex: 1,
  },
  expandedDealAmount: {
    fontSize: 12,
  },
  itemDescription: {
    width: '100%',
    justifyContent: 'center',
  },
  descriptionWrapper: {
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  descriptionTextWrapper: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 15,
    marginRight: 15,
  },
  descriptionButtonWrapper: {
    marginRight: 12,
    width: 105,
    height: 32,
    borderRadius: 20,
    paddingTop: 3,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 3,
  },
  descriptionLabel: {
    fontSize: 11,
    color: Colors.MEDIUM_GREY,
    fontWeight: '400',
    marginBottom: 5,
  },
  descriptionValue: {
    fontSize: 13,
    color: Colors.BLACK,
    fontWeight: '400',
    paddingBottom: 3,
  },
  descriptionButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  descriptionButtonText: {
    fontSize: 14,
    fontWeight: '700',
  },
});
