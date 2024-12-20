import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Svg, Circle, Line, Text as SvgText } from 'react-native-svg';
import { useRouter } from 'expo-router';

const Problem2 = () => {
  const router = useRouter();
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [amPm, setAmPm] = useState('AM');

  const handleHourChange = (value) => {
    const newHour = Number(value);
    setHour(newHour);
    if (newHour >= 12) {
      setAmPm('PM');
    } else {
      setAmPm('AM');
    }
  };

  const handleMinuteChange = (value) => {
    setMinute(Number(value));
  };

  const handleAmPmChange = () => {
    setAmPm(amPm === 'AM' ? 'PM' : 'AM');
    if (amPm === 'AM') {
      setHour(hour + 12);
    } else {
      setHour(hour - 12);
    }
  };

  const hourAngle = (hour % 12 + minute / 60) * 30;
  const minuteAngle = minute * 6;

  const getNumberPosition = (i) => {
    const angle = (i - 3) * 30;
    const x = 100 + 75 * Math.cos(Math.PI * (angle / 180));
    const y = 100 + 75 * Math.sin(Math.PI * (angle / 180));
    return { x, y };
  };

  const handleNextPage = () => {
    router.push('/P01/Problem3');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>현재 시간을 적고, 오른쪽 시계 안에 시침, 분침으로 시간을 그려보세요.</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text>오전/오후</Text>
          <TouchableOpacity onPress={handleAmPmChange} style={styles.toggleButton}>
            <Text>{amPm}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputWrapper}>
          <Text>시</Text>
          <TextInput
            style={styles.input}
            value={String(hour)}
            onChangeText={handleHourChange}
            keyboardType="numeric"
            maxLength={2}
            placeholder="시"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Text>분</Text>
          <TextInput
            style={styles.input}
            value={String(minute)}
            onChangeText={handleMinuteChange}
            keyboardType="numeric"
            maxLength={2}
            placeholder="분"
          />
        </View>
      </View>

      <View style={styles.clockContainer}>
        <Svg width={200} height={200} viewBox="0 0 200 200">
          <Circle cx="100" cy="100" r="90" stroke="black" strokeWidth="2" fill="white" />

          {Array.from({ length: 12 }, (_, i) => (
            <SvgText
              key={i}
              x={getNumberPosition(i + 1).x}
              y={getNumberPosition(i + 1).y}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              {i + 1}
            </SvgText>
          ))}

          <Line
            x1="100"
            y1="100"
            x2={100 + 40 * Math.cos(Math.PI * (hourAngle - 90) / 180)}
            y2={100 + 40 * Math.sin(Math.PI * (hourAngle - 90) / 180)}
            stroke="black"
            strokeWidth="6"
          />

          <Line
            x1="100"
            y1="100"
            x2={100 + 70 * Math.cos(Math.PI * (minuteAngle - 90) / 180)}
            y2={100 + 70 * Math.sin(Math.PI * (minuteAngle - 90) / 180)}
            stroke="black"
            strokeWidth="3"
          />
        </Svg>
      </View>

      <TouchableOpacity onPress={handleNextPage} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%',
  },
  input: {
    height: 40,
    width: '80%',
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 16,
  },
  toggleButton: {
    padding: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  clockContainer: {
    marginVertical: 20,
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

export default Problem2;
