import { Platform, StyleSheet } from 'react-native';
import Colors from './colors';
import Sizes from './sizes';

export default StyleSheet.create({
  windowSize: {
    height: Sizes.screen.height,
    width: Sizes.screen.width,
  },

  optionsIcon: {
    marginRight: 16,
    color: Colors.BLACK,
  },

  // Aligning items
  leftAligned: {
    alignItems: 'flex-start',
  },
  centerAligned: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightAligned: {
    alignItems: 'flex-end',
  },
  middleAligned: {
    alignItems: 'center',
  },
  verticalMiddleAligned: {
    justifyContent: 'center',
  },
  spaceBetween: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },

  // Text Styles
  body: {
    ...Platform.select({
      ios: {
        fontFamily: 'HelveticaNeue',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
    fontSize: 14,
    color: Colors.TEXT_COLOR,
    fontWeight: '300',
  },
  body2: {
    ...Platform.select({
      ios: {
        fontFamily: 'HelveticaNeue',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
    fontSize: 14,
    color: Colors.TEXT_COLOR,
    fontWeight: '300',
    opacity: 0.87,
  },
  subheading: {
    ...Platform.select({
      ios: {
        fontFamily: 'HelveticaNeue',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
    fontSize: 17,
    color: Colors.TEXT_COLOR,
  },
  title: {
    ...Platform.select({
      ios: {
        fontFamily: 'HelveticaNeue',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
    fontSize: 35,
    color: Colors.TEXT_COLOR,
    fontWeight: '700',
  },
  cellLabel: {
    ...Platform.select({
      ios: {
        fontFamily: 'HelveticaNeue',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
    fontSize: 20,
    color: Colors.TEXT_COLOR,
  },
  cellBody: {
    ...Platform.select({
      ios: {
        fontFamily: 'HelveticaNeue',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
    fontSize: 14,
    color: Colors.TEXT_COLOR,
  },
  cellHelpText: {
    ...Platform.select({
      ios: {
        fontFamily: 'HelveticaNeue',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
    fontSize: 12,
    color: Colors.TEXT_SECONDARY_COLOR,
  },
  link: {
    color: Colors.PRIMARY_COLOR,
    fontWeight: '500',
  },
  button: {
    borderRadius: 20,
    paddingVertical: 6,
  },
  buttonLarge: {
    width: '100%',
    paddingVertical: 8,
    borderRadius: 20,
  },
  buttonText: {
    ...Platform.select({
      ios: {
        fontFamily: 'HelveticaNeue',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
    fontSize: 16,
    color: Colors.WHITE,
  },
  buttonTextSml: {
    fontSize: 14,
  },
  buttonTextLg: {
    fontSize: 20,
  },

  // Card Styles
  cardTitle: {
    ...Platform.select({
      ios: {
        fontFamily: 'HelveticaNeue',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
    fontSize: 20,
    color: Colors.TEXT_COLOR,
  },
  cardSubTitle: {
    ...Platform.select({
      ios: {
        fontFamily: 'HelveticaNeue',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
    fontSize: 20,
    color: Colors.TEXT_COLOR,
  },
  cardLabel: {
    ...Platform.select({
      ios: {
        fontFamily: 'HelveticaNeue',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
    fontSize: 14,
    fontWeight: '500',
    color: Colors.TEXT_COLOR,
  },
  cardValue: {
    ...Platform.select({
      ios: {
        fontFamily: 'HelveticaNeue',
      },
      android: {
        fontFamily: 'Roboto',
      },
    }),
    fontSize: 14,
    fontWeight: '500',
    color: Colors.TEXT_COLOR,
  },
  // Helper Text Styles
  textCenterAligned: {
    textAlign: 'center',
  },
  textRightAligned: {
    textAlign: 'right',
  },

  // Input Styles
  inputStyle: {
    marginBottom: 20,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    borderColor: Colors.WHITE,
    borderWidth: 2,
  },
  iconStyle: {
    marginTop: 6,
    marginLeft: 10,
    width: 30,
  },
  formInput: {
    borderBottomColor: 'transparent',
  },

  // Custom Styles
  listStyle: {
    flex: 1,
    paddingTop: 25,
    paddingBottom: 25,
  },

  // Give me margin
  margin: {
    marginVertical: Sizes.margin,
    marginHorizontal: Sizes.margin,
  },
  marginSml: {
    marginVertical: Sizes.marginSml,
    marginHorizontal: Sizes.marginSml,
  },
  marginBottom: {
    marginBottom: Sizes.margin,
  },
  marginLeft: {
    marginLeft: Sizes.margin,
  },
  marginRight: {
    marginRight: Sizes.margin,
  },
  marginBottomSml: {
    marginBottom: Sizes.marginSml,
  },
  marginTopSml: {
    marginTop: Sizes.marginSml,
  },
  marginLeftSml: {
    marginLeft: Sizes.marginSml,
  },
  marginRightSml: {
    marginRight: Sizes.marginSml,
  },
  marginVerticalSml: {
    marginVertical: Sizes.marginSml,
  },
  marginHorizontal: {
    marginHorizontal: Sizes.margin,
  },
  marginHorizontalSml: {
    marginHorizontal: Sizes.marginSml,
  },

  // Gutters
  gutters: {
    marginLeft: 20,
    marginRight: 20,
  },

  // Give me padding
  padding: {
    paddingVertical: Sizes.padding,
    paddingHorizontal: Sizes.padding,
  },
  paddingHorizontal: {
    paddingHorizontal: Sizes.padding,
  },
  paddingLeft: {
    paddingLeft: Sizes.padding,
  },
  paddingRight: {
    paddingRight: Sizes.padding,
  },
  paddingVertical: {
    paddingVertical: Sizes.padding,
  },
  paddingTop: {
    paddingTop: Sizes.padding,
  },
  paddingBottom: {
    paddingBottom: Sizes.padding,
  },
  paddingSml: {
    padding: Sizes.paddingSml,
  },
  paddingHorizontalSml: {
    paddingHorizontal: Sizes.paddingSml,
  },
  paddingLeftSml: {
    paddingLeft: Sizes.paddingSml,
  },
  paddingRightSml: {
    paddingRight: Sizes.paddingSml,
  },
  paddingVerticalSml: {
    paddingVertical: Sizes.paddingSml,
  },
  paddingTopSml: {
    paddingTop: Sizes.paddingSml,
  },
  paddingBottomSml: {
    paddingBottom: Sizes.paddingSml,
  },
  noPadding: {
    paddingBottom: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  noPaddingTop: {
    paddingTop: 0,
  },
  noPaddingBottom: {
    paddingBottom: 0,
  },
  noPaddingLeft: {
    paddingLeft: 0,
  },
  noPaddingRight: {
    paddingRight: 0,
  },

  // shadow

  shadow: {
    shadowColor: '#000',
    marginBottom: Sizes.paddingSml,
    elevation: 2,
    shadowOpacity: 0.2,
    shadowRadius: 0.54,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  // /Material elements
  materialCard: {
    marginBottom: Sizes.paddingSml,
    marginHorizontal: Sizes.paddingSml,
    padding: Sizes.padding,
    borderRadius: Sizes.borderRadius,
    backgroundColor: Colors.WHITE,
    elevation: 1,
    shadowOpacity: 0.1815,
    shadowRadius: 0.54,
    shadowOffset: {
      height: 0.6,
    },
  },
  borderBottomLine: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.BORDER,
  },
  borderTopLine: {
    borderTopWidth: 1,
    borderTopColor: Colors.BORDER,
  },

  // Grid
  row: {
    flexDirection: 'row',
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  flex6: {
    flex: 6,
  },
});
