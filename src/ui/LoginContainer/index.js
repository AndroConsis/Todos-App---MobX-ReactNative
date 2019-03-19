import React, { Component } from 'react';
import { Text } from 'react-native';
import { Flex, CustomButton } from '../BaseComponents';


class LoginContainer extends Component {
    render() {
        return <Flex>
            <Text>LoginContainer</Text>
            <CustomButton title={"SignUp"} onPress={alert} />
        </Flex>
    }
}

export default LoginContainer;