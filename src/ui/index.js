import { Navigation } from 'react-native-navigation';
import LoginContainer from './LoginContainer';
import SignUpContainer from './SignUpContainer';

export function registerScreens() {
    Navigation.registerComponent('LoginContainer', (sc) => LoginContainer);
    Navigation.registerComponent('SignUpContainer', () => SignUpContainer);
}