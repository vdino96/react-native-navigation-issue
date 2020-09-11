/**
 * @format
 */

import App from './App';
import First from './screens/First';
import Second from './screens/Second';
import Third from './screens/Third';
// import Fourth from './screens/Fourth';
// import Fifth from './screens/Fifth';
import {Navigation} from 'react-native-navigation';

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);
Navigation.registerComponent('First', () => First);
Navigation.registerComponent('Second', () => Second);
Navigation.registerComponent('Third', () => Third);
// Navigation.registerComponent('Fourth', () => Fourth);
// Navigation.registerComponent('Fifth', () => Fifth);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'navigation.playground.WelcomeScreen',
      },
    },
  });
});
