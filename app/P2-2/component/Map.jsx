import React from "react";
import { View, TextInput, StyleSheet, Image } from 'react-native'
import pic3 from "./관동지도.png"
import pic4 from "./관동지도인풋.png"

const Map = () => {
    return (
        <View>
            <View style={styles.container}>
                <Image source={pic3} alt='map' />
                <Image source={pic4} alt="mapInput" />
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="1" placeholderTextColor="#333333" />
                <TextInput style={styles.input} placeholder="2" placeholderTextColor="#333333" />
                <TextInput style={styles.input} placeholder="3" placeholderTextColor="#333333" />
                <TextInput style={styles.input} placeholder="4" placeholderTextColor="#333333" />
                <TextInput style={styles.input} placeholder="5" placeholderTextColor="#333333" />
                <TextInput style={styles.input} placeholder="6" placeholderTextColor="#333333" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    inputContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    input: {
        flex: 1,
        fontSize: 17,
        borderWidth: 1,
        padding: 5,
        textAlign: "center",
    }
});

export default Map