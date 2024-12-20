import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Diary = ({ navigation }) => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [weather, setWeather] = useState(null);
  const [visitedPlaces, setVisitedPlaces] = useState('');
  const [peoplemet, setPeopleMet] = useState('');
  const [purchasedItems, setPurchasedItems] = useState('');
  const [expenses, setExpenses] = useState('');
  const [todayNews, setTodayNews] = useState('');
  const [morningActivities, setMorningActivities] = useState('');
  const [breakfastActivities, setBreakfastActivities] = useState('');
  const [afternoonActivities, setAfternoonActivities] = useState('');
  const [eveningActivities, setEveningActivities] = useState('');

  const days = ['일', '월', '화', '수', '목', '금', '토'];

  const handleDayOfWeekChange = (text) => {
    const validDays = ['일', '월', '화', '수', '목', '금', '토'];
    if (validDays.includes(text)) {
      setDayOfWeek(text);
    }
  };

  const setToday = () => {
    const today = new Date();
    setYear(today.getFullYear().toString());
    setMonth((today.getMonth() + 1).toString());
    setDay(today.getDate().toString());
    setDayOfWeek(days[today.getDay()]);
  };

  const weatherOptions = [
    { icon: '☀️', label: '맑음' },
    { icon: '🌧️', label: '비' },
    { icon: '❄️', label: '눈'},
    { icon: '🌤️', label: '구름' }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.diaryContainer}>
          <Text style={styles.diaryText}>일기</Text>
        </View>

        <View style={styles.dateContainer}>
          <View style={styles.dateInputContainer}>
            <TextInput
              style={styles.dateInput}
              placeholder="년"
              value={year}
              onChangeText={setYear}
              keyboardType="numeric"
              maxLength={4}
            />
            <Text style={styles.dateSeparator}>년</Text>
            <TextInput
              style={styles.dateInput}
              placeholder="월"
              value={month}
              onChangeText={setMonth}
              keyboardType="numeric"
              maxLength={2}
            />
            <Text style={styles.dateSeparator}>월</Text>
            <TextInput
              style={styles.dateInput}
              placeholder="일"
              value={day}
              onChangeText={setDay}
              keyboardType="numeric"
              maxLength={2}
            />
            <Text style={styles.dateSeparator}>일</Text>
            <TextInput
              style={styles.dateInput}
              placeholder="요일"
              value={dayOfWeek}
              onChangeText={handleDayOfWeekChange}
              maxLength={1}
            />
            <Text style={styles.dateSeparator}>요일</Text>
          </View>
         
        </View>

        <View style={styles.weatherSection}>
          <Text style={styles.sectionTitle}>오늘의 날씨</Text>
          <View style={styles.weatherOptions}>
            {weatherOptions.map((option) => (
              <TouchableOpacity
                key={option.label}
                style={[
                  styles.weatherOptionButton,
                  weather === option.icon && styles.selectedWeather
                ]}
                onPress={() => setWeather(option.icon)}
              >
                <Text style={styles.weatherIcon}>{option.icon}</Text>
                <Text style={styles.weatherLabel}>{option.label}</Text>
                {weather === option.icon && (
                  <Text style={styles.weatherMood}>{option.mood} 하루</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.cellGreen}>나의 하루</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>방문한 장소</Text>
          <TextInput 
            style={styles.inputSmall} 
            placeholder="입력하세요" 
            value={visitedPlaces}
            onChangeText={setVisitedPlaces}
          />
          <Text style={styles.cell}>오늘 만난 사람</Text>
          <TextInput 
            style={styles.inputSmall} 
            placeholder="입력하세요" 
            value={peoplemet}
            onChangeText={setPeopleMet}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>구입한 물건</Text>
          <TextInput 
            style={styles.inputSmall} 
            placeholder="입력하세요" 
            value={purchasedItems}
            onChangeText={setPurchasedItems}
          />
          <Text style={styles.cell}>지출 금액</Text>
          <TextInput 
            style={styles.inputSmall} 
            placeholder="입력하세요" 
            value={expenses}
            onChangeText={setExpenses}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.cellSmall}>오늘의 뉴스</Text>
          <TextInput 
            style={styles.inputSmall} 
            placeholder="입력하세요" 
            value={todayNews}
            onChangeText={setTodayNews}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.cellExtraSmallGreen}>시각</Text>
          <Text style={styles.cellLightGreen}>중요한 일</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.cellExtraSmall}>오전 5시~8시</Text>
          <Text style={styles.cellExtraSmall}>일어나서 한 일</Text>
          <TextInput 
            style={styles.inputLarge} 
            placeholder="입력하세요" 
            value={morningActivities}
            onChangeText={setMorningActivities}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.cellExtraSmall}>오전 8시~12시</Text>
          <Text style={styles.cellExtraSmall}>아침식사 후에 한 일</Text>
          <TextInput 
            style={styles.inputLarge} 
            placeholder="입력하세요" 
            value={breakfastActivities}
            onChangeText={setBreakfastActivities}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.cellExtraSmall}>오후 12시~5시</Text>
          <Text style={styles.cellExtraSmall}>오후에 한 일</Text>
          <TextInput 
            style={styles.inputLarge} 
            placeholder="입력하세요" 
            value={afternoonActivities}
            onChangeText={setAfternoonActivities}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.cellExtraSmall}>오후 5시~10시</Text>
          <Text style={styles.cellExtraSmall}>저녁식사 후에 한 일</Text>
          <TextInput 
            style={styles.inputLarge} 
            placeholder="입력하세요" 
            value={eveningActivities}
            onChangeText={setEveningActivities}
          />
        </View>
        <View style={styles.row}>
  <Text style={styles.cellExtraSmall}>내일 계획</Text>
  <TextInput 
    style={styles.inputLarge} 
    placeholder="입력하세요" 
    value={eveningActivities}
    onChangeText={setEveningActivities}
  />
</View>

<View style={styles.row}>
  <Text style={styles.cellExtraSmall}>뇌건강을 위한 습관</Text>
  <Text style={styles.cell}>
    <Text style={styles.checkmark}>✔️ </Text>
    <Text style={styles.highlightedText}>진땀나게 운동하세요.</Text>
    <Text> {'\n'}약간 숨이 차고 땀이 날 정도의 유산소 운동은 뇌의 혈액순환 촉진과 심혈관계 기능을 향상시킵니다.</Text>
  </Text>
</View>



        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  scrollContainer: {
    padding: 16,
  },
  diaryContainer: {
    backgroundColor: '#4CAF50', 
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'flex-start', 
    marginBottom: 10,
  },
  diaryText: {
    color: '#fff', 
    fontSize: 14,
    fontWeight: 'bold',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  dateInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    width: 40,
    textAlign: 'center',
    marginHorizontal: 2,
  },
  dateSeparator: {
    marginHorizontal: 2,
    fontSize: 12,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  todayButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  todayButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  weatherSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4CAF50',
  },
  weatherOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weatherOptionButton: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    width: 70,
  },
  selectedWeather: {
    backgroundColor: '#e6f2ff',
  },
  weatherIcon: {
    fontSize: 32,
    marginBottom: 5,
  },
  weatherLabel: {
    fontSize: 12,
    color: '#666',
  },
  weatherMood: {
    fontSize: 10,
    color: '#4CAF50',
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  cell: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cellGreen: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
    backgroundColor: '#4CAF50', 
    color: '#fff', 
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cellSmall: {
    flex: 0.4,
    padding: 8,
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cellExtraSmall: {
    flex: 0.3,
    padding: 8,
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cellExtraSmallGreen: {
    flex: 0.3,
    padding: 8,
    textAlign: 'center',
    backgroundColor: '#4CAF50', 
    color: '#fff', 
    borderWidth: 1,
    borderColor: '#ccc',
  },
  cellLightGreen: {
    flex: 1,
    padding: 8,
    textAlign: 'center',
    backgroundColor: '#A5D6A7', 
    color: '#000', 
    borderWidth: 1,
    borderColor: '#ccc',
  },
  inputSmall: {
    height: 30,
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 12,
    flex: 1,
    marginHorizontal: 5,
  },
  inputLarge: {
    flex: 1.5,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    textAlign: 'center',
  },
  highlightedText: {
    color: 'green',
    textDecorationLine: 'underline',
  },
  checkmark: {
    fontSize: 16,
  },
});

export default Diary;