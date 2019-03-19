import { React } from 'react';
import { Button } from 'react-native';

const CustomButton = props => (<Button
    title={props.title}
    onPress={props.onPress} />)

export default CustomButton;