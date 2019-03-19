import React from 'react';
import { View } from 'react-native';

const Flex = props => (<View
    style={{
        flex: props.flex || 1,
        flexDirection: props.flexDirection || "column",
        justifyContent: props.justifyContent || "center",
        alignItems: props.alignItems || "center",
        backgroundColor: props.backgroundColor || "transparent"
    }}>
    {props.children}
</View>)

export default Flex;