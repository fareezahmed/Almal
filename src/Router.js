import React from 'react';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

// helpers
import { Colors } from './config';

// Screens
import MainScreen from './screens/MainScreen';
import SettingsScreen from './screens/SettingsScreen';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPassword from './screens/ForgotPasswordScreen';
import ContractScreen from './screens/ContractScreen';

const Stack = StackNavigator(
  {
    // Splash: {
    //   screen: SplashScreen,
    //   navigationOptions: { header: null },
    // },
    // Login: {
    //   screen: LoginScreen,
    //   navigationOptions: { header: null },
    // },
    // SignUp: {
    //   screen: SignUpScreen,
    //   navigationOptions: { header: null },
    // },
    // ForgotPassword: {
    //   screen: ForgotPassword,
    //   navigationOptions: { headerTitle: 'Forgot Password' },
    // },
    Main: {
      screen: MainScreen,
      navigationOptions: { header: null },
      // navigationOptions: ({ navigation }) => ({
      //   title: 'Main',
      //   headerTitle: 'Main',
      //   headerRight: (
      //     <Button
      //       large
      //       onPress={ () => navigation.navigate('Lead') }
      //       icon={ { name: 'settings', color: Colors.NAV_COLOR } }
      //       buttonStyle={ {
      //         marginLeft: 10,
      //         width: 40,
      //         height: 40,
      //         backgroundColor: 'transparent',
      //       } }
      //       title=""
      //     />
      //   ),
      // }),
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        headerTitle: 'Settings',
      }),
    },
    Lead: {
      screen: ContractScreen,
      navigationOptions: { header: null },
    },
    // initialRouteName: 'Splash',
  },
  {
    navigationOptions: {
      headerTintColor: Colors.NAV_COLOR,
      headerStyle: {
        backgroundColor: Colors.NAV_BAR_COLOR,
      },
      headerTitleStyle: {
        fontSize: 22,
      },
    },
  },
);

const ScreenRouter = () => <Stack />;

export default ScreenRouter;
