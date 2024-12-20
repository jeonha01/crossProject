import React from 'react'
import { View, Image } from "react-native";

const Images = (props) => {
    return (
        <View>
            <Image source={props.src} alt={props.altText} />
        </View>
    )
}

export default Images