import React from 'react'
import { View, Image } from "react-native";
import pic1 from './메달 포상금.png'

const ImageMedal = () => {
    return (
        <View>
            <Image source={pic1} alt='alt' />
        </View>
    )
}

export default ImageMedal