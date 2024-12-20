import React from "react";
import { View, Text, Image, Button } from "react-native";
import { router } from "expo-router";
import styled from "styled-components/native";
import BoxModel from "./BoxModel";

import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const ButtonWrapper = styled.View`
  width: 70%;
  margin-top: 20px;
  align-self: center;
`;

const Item = styled.View`
  width: 48%; 
  margin-bottom: 15px;
  align-items: center; 
`;

const RedText =styled.Text` 
  color: red;
  fontSize: 18;
  marginBottom: 5;
  fontWeight: bold;
`;

export default function Problem5() {
  const descriptions = [
    { title: "1. 청간정", value: "위치 : 강원 고성 \n특징 : 청간천과 만경청파가 넘실거리는 기암절벽 위에 위치" },
    { title: "2. 낙산사", value: "위치 : 강원 양양 \n특징 : '보타낙가산'(관음보살이 상주한 곳)의 이름에서 유래한 사찰" },
    { title: "3. 경포대", value: "위치 : 강원 강릉 \n특징 : 동해안 제일의 달맞이 명소" },
    { title: "4. 죽서루", value: "위치 : 강원 삼척 \n특징 : 누각의 동쪽에 대나무 숲이 있어 이름 유래됨" },
    { title: "5. 망양정", value: "위치 : 경북 울진 \n특징 : 처음 강원지방에 세워졌지만, 세월이 지나 허물어져 망양리로 이전함" },
    { title: "6. 월송정", value: "위치 : 경북 울진 \n특징 : 달빛과 어울리는 솔숲(月松을 잘못 표기)에서 이름 유래됨" },
  ];
  return (

    <Container>
      <View style={{ alignItems: "flex-start" }}>
        <Image source={image3} style={{ width: 140, height: 25, marginBottom: 20 }} />
      </View>

      <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 20 }}>
        앞서 기억해 둔 
        <RedText> 관동팔경 </RedText>
        에 대한 설명입니다. 소리 내어 읽어보세요.
      </Text>


      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        {descriptions.map((desc, index) => (
          <Item key={index}>
            <BoxModel title={desc.title} value={desc.value} />
          </Item>
        ))}
      </View>

      <View style={{ alignItems: "flex-start" }}>
        <Image source={image4} style={{ width: 140, height: 15, marginVertical: 10 }} />
      </View>

      
      <ButtonWrapper>
        <Button title="다음" onPress={() => router.push("../P07-1/App")} />
      </ButtonWrapper>
    </Container>
  );
}