import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Keyboard,
  Text,
  View,
  ImageBackground,
} from "react-native";

import axios from "axios";

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  const searchLocation = (event) => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response);
    });
    setLocation("");
    Keyboard.dismiss();
  };

  const handleKeyPress = (event) => {
    if (event.nativeEvent.key === "Enter") {
      searchLocation();
    }
  };

  return (
    <ImageBackground
      source={require("./assets/background.jpeg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Search Filter */}
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder="Enter location"
            value={location}
            onChangeText={setLocation}
            onSubmitEditing={searchLocation}
            onKeyPress={handleKeyPress}
          />
        </View>
        <View>
          <View className="top">
            <View className="location">
              <Text>Madrid</Text>
            </View>
            <View className="temp">
              <Text>25 degrees C</Text>
            </View>
            <View className="description">
              <Text>Cloudy</Text>
            </View>
          </View>
          <View className="bottom">
            <View className="feels">
              <Text className="bold">30°C</Text>
              <Text className="paragraph-font-size">Feels like</Text>
            </View>
            <View className="humidity">
              <Text className="bold">49%</Text>
              <Text className="paragraph-font-size">Humidity</Text>
            </View>
            <View className="wind">
              <Text className="bold">5 mph</Text>
              <Text className="paragraph-font-size">Wind Speed</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  search: {
    textAlign: "center",
    padding: 16,
  },
  input: {
    marginTop: 30,
    paddingVertical: 7,
    paddingHorizontal: 35,
    fontSize: 16,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.8)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#f8f8f8",
  },
  top: {
    width: "100%",
    margin: 16,
    marginTop: "auto",
    marginBottom: "auto",
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginVertical: '2rem',
    padding: '1rem',
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});
