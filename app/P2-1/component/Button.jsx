import React from 'react';
import { Pressable, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const Button = () => {
    const router = useRouter();

    return (
        <Pressable
            style={styles.button}
            onPress={() => router.push('P2-2/P2_2')}
        >
            <Text style={styles.text}>다음</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0095F6',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Button;
