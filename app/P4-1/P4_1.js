import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import pic1 from './문제1.png';
import Question from './component/Question';
import Button from "./component/Button";
import Title from "./component/Title";
import ImageMedal from "./component/ImageMedal";
import Imagezige from "./component/Imagezige";

export default function P4_1() {
    return (
        <View style={styles.container}>
            <Question
                src={pic1}
                altText="Instruction"
                text={
                    <>
                        다음은 올림픽 메달 포상금 및 일부 올림픽 참가국의 메달 집계입니다.
                        다음의 문제를 풀어보세요(1~3).
                    </>
                }
            />
            <Title text='< 메달 포상금 >' />
            <ImageMedal />
            <Title text='< 메달 집계 >' />
            <Imagezige />
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
});
