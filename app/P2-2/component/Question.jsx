import React from 'react'
import { View, Text, Image } from "react-native";

const Question = (props) => {
    return (
        <View>
            <Image source={props.src} alt={props.altText} />
            <Text style={{ fontSize: 25 }}>{props.text}</Text>
        </View>
    )
}

export default Question 