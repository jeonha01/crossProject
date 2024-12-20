import React from 'react'
import { View, Image, Text, StyleSheet } from "react-native";

const MapImage = (props) => {
    return (
        <View>
            <Image source={props.src} alt={props.alt} />
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    }
});

export default MapImage