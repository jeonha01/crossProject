import React from 'react';
import { View, TextInput, StyleSheet, ImageBackground, SafeAreaView, Pressable, Text } from 'react-native';
import { useRouter } from "expo-router";

const App = ({
  inputPositions = [
    { top: 65, left: 160 },
    { top: 118, left: 177 },
    { top: 175, left: 224 },
    { top: 303, left: 270 },
    { top: 360, left: 177 },
    { top: 447, left: 270 },
  ],
  inputSize = { width: '27.6%', height: 40 },
  imageSize = { width: '100%', height: '95%' }
}) => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('./assets/image3.jpg')}
        style={[styles.backgroundImage, { width: imageSize.width, height: imageSize.height }]}
        resizeMode="cover"
      >
        <View style={styles.container}>
          {inputPositions.map((position, index) => (
            <TextInput
              key={index}
              style={[styles.input, {
                position: 'absolute',
                top: position.top,
                left: position.left,
                width: inputSize.width,
                height: inputSize.height
              }]}
              placeholder="빈칸 입력"
              placeholderTextColor="#999"
              textAlign="center"
            />
          ))}
        </View>
      </ImageBackground>
      <Pressable
        style={styles.button}
        onPress={() => router.push('P08/P08')}
      >
        <Text style={styles.text}>다음</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 0,
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fontSize: 20
    ,
    textAlign: 'center'
  },
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

export default App;