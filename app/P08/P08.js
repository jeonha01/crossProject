import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Pressable, Text } from 'react-native';
import { useRouter } from "expo-router";

const windowWidth = Dimensions.get('window').width;

const backgroundImage = require('./assets/homeimage.jpg');

const App = () => {
  const leftGroupPosition = { x: 155, y: 163 };
  const rightGroupPosition = { x: 243, y: 163 };
  const router = useRouter();

  const [points, setPoints] = useState([]);
  const [lines, setLines] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState(null);

  useEffect(() => {
    const newPoints = [];
    for (let i = 0; i < 6; i++) {
      newPoints.push({ id: newPoints.length, x: leftGroupPosition.x, y: leftGroupPosition.y + i * 100 });
    }
    for (let i = 0; i < 6; i++) {
      newPoints.push({ id: newPoints.length, x: rightGroupPosition.x, y: rightGroupPosition.y + i * 100 });
    }
    setPoints(newPoints);
  }, []);

  const handlePointPress = (pointId) => {
    if (selectedPoint === null) {
      setSelectedPoint(pointId);
    } else {
      const startPoint = points[selectedPoint];
      const endPoint = points[pointId];
      setLines((prevLines) => [
        ...prevLines,
        { start: startPoint, end: endPoint },
      ]);
      setSelectedPoint(null);
    }
  };

  const drawLines = () => {
    return lines.map((line, index) => {
      const { start, end } = line;

      const startX = start.x;
      const startY = start.y;
      const endX = end.x;
      const endY = end.y;

      const width = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
      const angle = Math.atan2(endY - startY, endX - startX);


      return (
        <View
          key={index}
          style={{
            position: 'absolute',
            left: startX,
            top: startY,
            width: width,
            height: 2,
            backgroundColor: 'black',
            transform: [{ rotate: `${angle}rad` }],
            transformOrigin: '0% 50%',
          }}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
      {points.map((point) => (
        <TouchableOpacity
          key={point.id}
          style={[styles.point, { top: point.y - 5, left: point.x - 5 }]}
          onPress={() => handlePointPress(point.id)}
        />
      ))}
      {drawLines()}
      <Pressable
        style={styles.button}
        onPress={() => router.push('P09/Diary')}
      >
        <Text style={styles.text}>다음</Text>
      </Pressable>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingBottom: 50, 
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  point: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgb(72, 116, 240)',
  },
  button: {
    backgroundColor: '#0095F6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute', 
    bottom: 20,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
