import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import pic1 from './문제.png';
import pic2 from './관동팔경.png';
import Question from './component/Question';
import Images from "./component/Images";
import Button from "./component/Button";
import MapImages from "./component/MapImages";

export default function P3_1() {
    return (
        <View style={styles.container}>
            <Question
                src={pic1}
                altText="Instruction"
                text={
                    <>
                        앞서 기억해 둔 <Text style={styles.highlight}>관동팔경</Text>의 사진입니다. 명승지의 사진과 이름을 함께 확인하며
                        소리 내어 읽어보세요.
                    </>
                }
            />
            <MapImages />
            <View style={styles.imageContainer}>
                <Images src={pic2} altText="Instruction" />
            </View>
            <Button />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    highlight: {
        color: 'red',
        fontWeight: 'bold',
    },
    imageContainer: {
        alignSelf: 'flex-start'
    },
});
