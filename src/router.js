import React from 'react';
import { Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

// helpers
import { Colors } from './config';

// Screens
import MainScreen from './screens/mainScreen';
import SettingsScreen from './screens/settingsScreen';

const Stack = StackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Main',
        headerRight: (
          <Button
            onPress={() => navigation.navigate('Settings')}
            title="Settings"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        ),
      }),
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        title: 'Settings',
      }),
    },
  },
  {
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: Colors.PRIMARY_COLOR,
      },
    },
  },
);

const ScreenRouter = () => <Stack />;

export default ScreenRouter;
