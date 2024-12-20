import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, ScrollView, Dimensions, SafeAreaView, Pressable, Text } from 'react-native';
import { useRouter } from "expo-router";

const App = () => {
  const [userInputs, setUserInputs] = useState(Array(12).fill(''));
  const router = useRouter();

  const handleInputChange = (text, index) => {
    const newInputs = [...userInputs];
    newInputs[index] = text;
    setUserInputs(newInputs);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Image
          source={require('./assets/image1.jpg')}
          style={styles.headerImage}
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          <View style={styles.grid}>
            {Array.from({ length: 12 }).map((_, index) => (
              <View key={index} style={styles.gridItem}>
                <TextInput
                  style={[styles.input, { textAlign: 'center' }]}
                  placeholder="입력"
                  placeholderTextColor="#999"
                  value={userInputs[index]}
                  onChangeText={(text) => handleInputChange(text, index)}
                />
              </View>
            ))}
          </View>
          <View style={styles.longInputContainer}>
            <TextInput
              style={styles.longInput}
              placeholder="문장을 입력하세요"
              placeholderTextColor="#999"
            />
          </View>
          <Image
            source={require('./assets/image2.jpg')}
            style={styles.footerImage}
            resizeMode="contain"
          />
        </View>
        <Pressable
          style={styles.button}
          onPress={() => router.push('P07-2/P07_2')}
        >
          <Text style={styles.text}>다음</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  headerImage: {
    width: windowWidth,
    height: 70,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    width: (windowWidth - 40) / 6,
    padding: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  longInputContainer: {
    padding: 10,
  },
  longInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  footerImage: {
    width: windowWidth * 0.5,
    height: 100,
    marginTop: 5,
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
