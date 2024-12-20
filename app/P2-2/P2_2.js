import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import pic1 from './문제.png';
import pic2 from './관동팔경.png';
import Question from './component/Question';
import Map from "./component/Map";
import Images from "./component/Images";
import Button from "./component/Button";

export default function P2_2() {
    return (
        <View style={styles.container}>
            <Question
                src={pic1}
                altText="Instruction"
                text={
                    <>
                        앞서 기억해 둔 <Text style={styles.highlight}>관동팔경</Text>의 위치를 지도에 표시했습니다. 오른쪽 빈
                        칸에 6가지 명승지의 이름을 따라 적어보세요.
                    </>
                }
            />
            <Map />
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