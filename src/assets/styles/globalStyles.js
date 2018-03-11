import { Platform } from 'react-native';

// Environment Variable
import Colors from './Colors';
import Variables from './Variables';

const { Screen } = Variables;

const resizeMode = 'cover';

export const coverFullPage = {
  flex: 1,
  resizeMode,
  position: 'absolute',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
}

export const header = {
  flex: 1,
}

export const main = {
  flex: 4,
  justifyContent: 'center',
  alignItems: 'center',
}

export const footer = {
  flex: 1,
}

export const circle = {
  borderRadius: 200,
  justifyContent: 'center',
  alignItems: 'center',
}

export const windowSize = {
  height: Screen.height,
  width: Screen.width,
}

export const title = {
  ...Platform.select({
    ios: {
      fontFamily: 'HelveticaNeue',
    },
    android: {
      fontFamily: 'Roboto',
    },
  }),
  fontSize: Variables.H1FontSize,
  color: Colors.WHITE,
  backgroundColor: 'transparent',
  fontWeight: '700',
}

export const headerTitle = {
  ...Platform.select({
    ios: {
      fontFamily: 'HelveticaNeue',
    },
    android: {
      fontFamily: 'Roboto',
    },
  }),
  fontSize: Variables.H2FontSize,
  color: Colors.WHITE,
  backgroundColor: 'transparent',
  fontWeight: '700',
}

export const baseText = {
  ...Platform.select({
    ios: {
      fontFamily: 'HelveticaNeue',
    },
    android: {
      fontFamily: 'Roboto',
    },
  }),
  fontSize: Variables.baseFontSize,
  color: Colors.TEXT_COLOR,
  fontWeight: '300',
}

export const link = {
  color: Colors.LINK_COLOR,
  fontWeight: '500',
}

export const centerContainWrapper = {
  backgroundColor: 'transparent',
  justifyContent: 'center',
  alignItems: 'center',
}
