import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import pic1 from './문제.png';
import pic2 from './관동팔경.png';
import Question from './component/Question';
import Input from "./component/Input";
import Images from "./component/Images";
import Button from "./component/Button";

export default function P2_1() {
    return (
        <View style={styles.container}>
            <Question
                src={pic1}
                altText="Instruction"
                text={
                    <>
                        앞서 기억해 둔 <Text style={styles.highlight}>관동팔경</Text>의 6가지 경치 이름을 쉽게 기억하기 위하여 각
                        명승지 이름의 첫 글자를 적고, 아래 문장을 따라 적어보세요. 그리고 소리 내어 3번 읽어보세요.
                    </>
                }
            />
            <Input />
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
