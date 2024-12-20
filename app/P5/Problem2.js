import React, { useState } from "react";
import { View, Text, Image, Button, TextInput, Modal, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import styled from "styled-components/native";

const flags = [
  { name: "Japan", path: require("../../assets/images/japan.png") },
  { name: "France", path: require("../../assets/images/france.png") },
  { name: "Korea", path: require("../../assets/images/korea.png") },
  { name: "China", path: require("../../assets/images/china.png") },
  { name: "Brazil", path: require("../../assets/images/brazil.png") },
];

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Table = styled.View`
  width: 100%;
  border-width: 1px;
  border-color: #ccc;
  margin: 20px 0;
  margin-bottom: 80px;
`;

const Row = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: #ccc;
  align-items: center;
`;

const Cell = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const ButtonWrapper = styled.View`
  width: 70%;
  margin-top: 20px;
`;

export default function Problem2() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");

  const [flagsSelected, setFlagsSelected] = useState([null, null, null]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openFlagModal = (index) => {
    setSelectedIndex(index);
    setModalVisible(true);
  };


  const selectFlag = (flag) => {
    const updatedFlags = [...flagsSelected];
    updatedFlags[selectedIndex] = flag;
    setFlagsSelected(updatedFlags);
    setModalVisible(false);
  };

  return (
    <Container>
      <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 20 }}>
        2. 포상금을 많이 받는 순서대로 국가 이름을 적고, 국기를 그려보세요.
      </Text>

      <Table>
        <Row>
          <Cell><Text>순위</Text></Cell>
          <Cell><Text>1</Text></Cell>
          <Cell><Text>2</Text></Cell>
          <Cell><Text>3</Text></Cell>
        </Row>

        <Row>
          <Cell><Text>국가 이름</Text></Cell>
          <Cell>
            <TextInput
              style={{ borderWidth: 1, padding: 5, width: 70 }}
              value={first}
              onChangeText={setFirst}
            />
          </Cell>
          <Cell>
            <TextInput
              style={{ borderWidth: 1, padding: 5, width: 70 }}
              value={second}
              onChangeText={setSecond}
            />
          </Cell>
          <Cell>
            <TextInput
              style={{ borderWidth: 1, padding: 5, width: 70 }}
              value={third}
              onChangeText={setThird}
            />
          </Cell>
        </Row>

        <Row>
          <Cell><Text>국기</Text></Cell>
          {flagsSelected.map((flag, index) => (
            <Cell key={index}>
              <TouchableOpacity onPress={() => openFlagModal(index)}>
                <Text>{flag ? null : "선택"}</Text>
                {flag && <Image source={flag} style={{ width: 50, height: 30 }} />}
              </TouchableOpacity>
            </Cell>
          ))}
        </Row>
      </Table>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>국기를 선택하세요</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
              {flags.map((flag, index) => (
                <TouchableOpacity key={index} onPress={() => selectFlag(flag.path)}>
                  <Image source={flag.path} style={{ width: 60, height: 40, margin: 10 }} />
                </TouchableOpacity>
              ))}
            </View>
            <Button title="닫기" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <ButtonWrapper>
        <Button title="다음" onPress={() => router.push("./Problem3")} />
      </ButtonWrapper>
    </Container>
  );
}