import React, { useState } from "react";
import { View, Text, Image, Button } from "react-native";
import { router } from "expo-router";
import styled from "styled-components/native";
import image1 from "../../assets/images/image1.jpg";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 50%;
`;

const SInput = styled.TextInput`
  width: 40%;
  height: 50px;
  margin: 0 8px;
  text-align: center; 
  border: solid #ccc;
  margin-bottom: 80px;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
`;

const ButtonWrapper = styled.View`
  width: 70%;
  margin-top: 20px;
`;


export default function Problem1() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");

  const correctAnswers = ["중국", "대한민국", "프랑스"];

  const checkAnswer = () => {
    if (
      first.trim() === correctAnswers[0] &&
      second.trim() === correctAnswers[1] &&
      third.trim() === correctAnswers[2]
    ) {
      alert("정답");
    } else {
      alert("오답");
    }
    router.push("./Problem2"); 
  };

  return (
    <Container>
      <Text style={{ fontSize: 15, textAlign: "center", marginBottom: 20 }}>
        1. 메달 순위는 금메달의 개수가 많은 순으로 결정이 됩니다. 
        {"\n"} 1등부터 3등까지 순위를 매겨 단상의 빈칸에 각 국가의 이름을 적어보세요.</Text>
      <Image source={image1} style={{ width: 300, height: 200 }} />

  
      <Row>
      <SInput
        value={first}
        onChangeText={setFirst}
      />
      <SInput
        value={second}
        onChangeText={setSecond}
      />
      <SInput
        value={third}
        onChangeText={setThird}
      />
    </Row>
    <ButtonWrapper>
    <Button title="다음" onPress={checkAnswer} />
    </ButtonWrapper>
    </Container>
  );
}

