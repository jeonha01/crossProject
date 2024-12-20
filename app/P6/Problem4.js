import React, { useState } from "react";
import { View, Text, Image, Button } from "react-native";
import { router } from "expo-router";
import styled from "styled-components/native";

import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Table = styled.View`
  border: 1px solid #000;
  width: 100%;
  margin-bottom: 20px;
`;

const TableRow = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: #000;
  border-style: solid;
`;

const TableCell = styled.View`
  flex: 1;
  border-right-width: 1px;
  border-color: #000;
  border-style: solid;
  align-items: center;
  justify-content: center;
  height: 60px;
  
`;

const LastTableCell = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

const Input = styled.TextInput`
  width: 90%;
  height: 40px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

const StyledInput = styled.TextInput`
  height: 20px; 
  border-bottom-width: 1px;
  border-color: #ccc;
  width: 40px;
  text-align: center;
  margin-horizontal: 5px;
  font-size: 14px;
  line-height: 20px; 
  padding: 0; 
`;

const RedText =styled.Text` 
  color: red;
  fontSize: 18;
  marginBottom: 5;
  fontWeight: bold;
`;

const ButtonWrapper = styled.View`
  width: 70%;
  margin-top: 20px;
`;

export default function Problem4() {
  const [inputs, setInputs] = useState({
    col1: "",
    col2: "",
    col3: "",
    col4: "",
    col5: "",
    col6: "",
    col7: "",
    col8: "",
    col9: "",
    col10: "",
    blank1: "",
    blank2: "",
    blank3: "",
    blank4: "",
  });

  const handleInputChange = (field, value) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [field]: value,
    }));
  };

  const renderTable = () => {
    const data = [
      ["청간정", "col1", "col2", "col3", "col4", "col5"],
      ["청", "col6", "col7", "col8", "col9", "col10"],
    ];

    return data.map((row, rowIndex) => (
      <TableRow key={rowIndex}>
        {row.map((cell, colIndex) => (
          colIndex === 0 ? (
            <TableCell key={colIndex}>
              <Text>{cell}</Text>
            </TableCell>
          ) : (
            <TableCell key={colIndex}>
              <Input
                value={inputs[cell] || ""}
                onChangeText={(text) => handleInputChange(cell, text)}
                placeholder=""
              />
            </TableCell>
          )
        ))}
      </TableRow>
    ));
  };

  return (
    <Container>

      <View style={{ width: "100%", alignItems: "flex-start" }}>
        <Image source={image3} style={{ width: 140, height: 25, marginBottom: 15 }} />
      </View>

      <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 20 }}>
        앞서 기억해 둔 
        <RedText>관동팔경 </RedText>              
         6가지 명승지 이름을 빈칸에 순서대로 적어보세요.
      </Text>

      <Table>{renderTable()}</Table>


      <View style={{ width: "100%" }}>
        <Text style={{ marginBottom: 10, lineHeight: 20, textAlign: "center" }}>
          청바지를 입고{" "}
          <StyledInput
            value={inputs.blank1}
            onChangeText={(text) => handleInputChange("blank1", text)}
          />
          지를 먹은{" "}
          <StyledInput
            value={inputs.blank2}
            onChangeText={(text) => handleInputChange("blank2", text)}
          />
          씨는{" "}
          <StyledInput
            value={inputs.blank3}
            onChangeText={(text) => handleInputChange("blank3", text)}
          />
          양에서{" "}
          <StyledInput
            value={inputs.blank4}
            onChangeText={(text) => handleInputChange("blank4", text)}
          />
          드컵을 시청했다.
        </Text>
      </View>

      <View style={{ width: "100%", alignItems: "flex-start" }}>
        <Image source={image4} style={{ width: 140, height: 15, marginTop: 20 }} />
      </View>


      <ButtonWrapper>
        <Button title="다음" onPress={() => router.push("./Problem5")} />
      </ButtonWrapper>
    </Container>
  );
}