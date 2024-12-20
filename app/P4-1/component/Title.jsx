import React from 'react'
import { View, Text } from "react-native";

const Title = (props) => {
    return (
        <View>
            <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{props.text}</Text>
        </View>
    )
}

export default Title