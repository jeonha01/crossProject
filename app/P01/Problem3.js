import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Problem3 = () => {
  const router = useRouter();

  const handleNext = () => {
    router.push('/P2-1/P2_1');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.highlight}><Text style={styles.boldText}>🪴 관동팔경 기억하기</Text></Text>
      </Text>
      
      <Text style={styles.description}>
        <Text style={styles.redText}>
          <Text style={styles.boldText}>관동팔경</Text>
        </Text> 강원도 대관령의 동쪽인 '관동'과 8가지 아름다운 경치인 '팔경'을 합쳐 부르는 말입니다.
        8가지 경치 중 남한에 위치한 경치는 6가지입니다.
      </Text>
      <Text style={styles.instruction}>
        6가지 경치 (명승지)를 소리내어 읽고, 아래쪽 빈칸에 따라 적어보세요.
      </Text>

      <View style={styles.tableSection}>
        <View style={styles.locationTable}>
          {[
            ['청간정', '경포대'],
            ['낙산사', '죽서루'],
            ['망양정', '월송정']
          ].map((row, rowIndex) => (
            <View key={rowIndex} style={styles.tableRow}>
              {row.map((location, cellIndex) => (
                <Text key={cellIndex} style={styles.locationText}>
                  {location}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </View>
      <View style={styles.tableSection}>
        <View style={styles.inputTable}>
          {[1, 2, 3].map((rowIndex) => (
            <View key={rowIndex} style={styles.tableRow}>
              {[1, 2].map((cellIndex) => (
                <TextInput
                  key={cellIndex}
                  style={styles.input}
                  placeholder="입력"
                  placeholderTextColor="#A0A0A0"
                />
              ))}
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.buttonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  highlight: {
    backgroundColor: 'yellow',
    padding: 3,
  },
  redText: {
    color: 'red',
    fontSize: 18,
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  instruction: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
  },
  tableSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 15,
    marginBottom: 20,
  },
  locationTable: {
    flex: 1,
    marginRight: 10,
  },
  inputTable: {
    flex: 1,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  locationText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#333',
    marginHorizontal: 5,
  },
  nextButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Problem3;
