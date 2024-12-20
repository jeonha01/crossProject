import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Input = () => {

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>청간정</Text>
                <Text style={styles.text}>낙산사</Text>
                <Text style={styles.text}>경포대</Text>
                <Text style={styles.text}>죽서루</Text>
                <Text style={styles.text}>망양정</Text>
                <Text style={styles.text}>월송정</Text>
            </View>
            <View style={styles.container}>
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
            </View>
            <View>
                <Text style={styles.textLong}>청바지를 입고 낙지를 먹은 경죽씨는 망양에서 월드컵을 시청했다.</Text>
            </View>
            <View>
                <TextInput style={styles.inputLong} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    text: {
        flex: 1,
        fontSize: 17,
        borderWidth: 1,
        padding: 5,
        textAlign: "center",
    },
    input: {
        flex: 1,
        fontSize: 17,
        borderWidth: 1,
        padding: 5,
        textAlign: "center",
        color: 'red',
    },
    textLong: {
        borderWidth: 1,
        padding: 5,
        textAlign: "center",
    },
    inputLong: {
        borderWidth: 1,
        padding: 5,
        textAlign: "center",
    }
});

export default Input