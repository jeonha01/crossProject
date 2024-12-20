import React, { useState } from "react";
import { View, Text, Image, Button, TextInput } from "react-native";
import { router } from "expo-router";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.View`
  width: 70%;
  margin-top: 20px;
`;

export default function Problem3() {
  const [country, setCountry] = useState("");

   const correctAnswers = ["중국"];
  
    const checkAnswer = () => {
      if (
        country.trim() === correctAnswers[0]
      ) {
        alert("정답");
      } else {
        alert("오답");
      }
      router.push("../P6/Problem4"); 
    };

  return (
    <Container>
      <Text style={{ fontSize: 15, textAlign: "center", marginBottom: 20 }}>
        3. 결과적으로, 메달 순위와 관계없이 가장 실속 있게 
        {"\n"}    포상금을 받는 국가는 어디인가요?</Text>
        
        <TextInput
                style={{ borderWidth: 1, padding: 5, width: 70 }}
                value={country}
                onChangeText={setCountry}
                />
        

      <ButtonWrapper>
      <Button title="다음" onPress={checkAnswer} />
      </ButtonWrapper>
    </Container>
  );
}