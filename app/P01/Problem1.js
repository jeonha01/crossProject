import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const Problem1 = () => {
  const router = useRouter();
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [weather, setWeather] = useState('');

  const weatherOptions = [
    { icon: '☀️', label: '맑음' },
    { icon: '🌧️', label: '비' },
    { icon: '❄️', label: '눈' },
    { icon: '🌤️', label: '구름' }
  ];

  const handleNext = () => {
    router.push('/P01/Problem2'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        🪴 오늘의 날짜와 날씨를 입력해 주세요.
      </Text>

      <View style={styles.dateWeatherContainer}>
        
        <View style={styles.dateInputWrapper}>
          <TextInput
            style={styles.input}
            value={year}
            onChangeText={setYear}
            keyboardType="numeric"
            placeholder=""
            placeholderTextColor="#a0a0a0"
          />
          <Text style={styles.label}>년</Text>
        </View>

        <View style={styles.dateInputWrapper}>
          <TextInput
            style={styles.input}
            value={month}
            onChangeText={setMonth}
            keyboardType="numeric"
            placeholder=""
            placeholderTextColor="#a0a0a0"
          />
          <Text style={styles.label}>월</Text>
        </View>

        <View style={styles.dateInputWrapper}>
          <TextInput
            style={styles.input}
            value={day}
            onChangeText={setDay}
            keyboardType="numeric"
            placeholder=""
            placeholderTextColor="#a0a0a0"
          />
          <Text style={styles.label}>일</Text>
        </View>

        <View style={styles.dateInputWrapper}>
          <TextInput
            style={styles.input}
            value={dayOfWeek}
            onChangeText={setDayOfWeek}
            placeholder=""
            placeholderTextColor="#a0a0a0"
          />
          <Text style={styles.label}>요일</Text>
        </View>

    
        <View style={styles.weatherContainer}>
          {weatherOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.weatherButton, weather === option.icon && styles.selectedWeather]}
              onPress={() => setWeather(option.icon)}
            >
              <Text style={styles.weatherIcon}>{option.icon}</Text>
              <Text style={styles.weatherLabel}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

  
      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNext}
      >
        <Text style={styles.nextButtonText}>다음으로</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  dateWeatherContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  dateInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '23%',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginRight: 5,
  },
  input: {
    height: 40,
    width: '70%',
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  weatherContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '40%',
  },
  weatherButton: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    width: 60,
  },
  selectedWeather: {
    backgroundColor: '#e6f2ff',
  },
  weatherIcon: {
    fontSize: 28,
    marginBottom: 5,
  },
  weatherLabel: {
    fontSize: 12,
    color: '#666',
  },
  nextButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Problem1;
