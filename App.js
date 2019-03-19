import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/ui';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'Initializing'
      }
    },
  });
});