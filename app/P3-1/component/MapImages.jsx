import React from 'react'
import { View, StyleSheet } from "react-native";
import pic1 from './청간정.png'
import pic2 from './낙산사.png'
import pic3 from './경포대.png'
import pic4 from './죽서루.png'
import pic5 from './망양정.png'
import pic6 from './월송정.png'
import MapImage from './MapImage';

const MapImages = () => {
    return (
        <View>
            <View style={styles.container}>
                <MapImage src={pic1} alt='alt' text='청간정' />
                <MapImage src={pic2} alt='alt' text='낙산사' />
            </View>
            <View style={styles.container}>
                <MapImage src={pic3} alt='alt' text='경포대' />
                <MapImage src={pic4} alt='alt' text='죽서루' />
            </View>
            <View style={styles.container}>
                <MapImage src={pic5} alt='alt' text='망양정' />
                <MapImage src={pic6} alt='alt' text='월송정' />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
});

export default MapImages