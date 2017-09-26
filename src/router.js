import React from 'react';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

// helpers
import { GlobalStyles, Colors } from './config';

// Screens
import MainScreen from './screens/mainScreen';
import SettingsScreen from './screens/settingsScreen';

const Stack = StackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Main',
        headerTitle: 'Main',
        headerRight: (
          <Button
            large
            onPress={() => navigation.navigate('Settings')}
            icon={{ name: 'settings', color: '#007aff' }}
            buttonStyle={{ marginLeft: 10, width: 40, height: 40, backgroundColor: 'transparent' }}
            title=""
          />
        ),
      }),
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        headerTitle: 'Settings',
      }),
    },
  },
  {
    navigationOptions: {
      headerTintColor: Colors.NAV_COLOR,
      headerStyle: {
        backgroundColor: Colors.PRIMARY_COLOR,
      },
    },
  },
);

const ScreenRouter = () => <Stack />;

export default ScreenRouter;
