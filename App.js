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
              <Text>{data.name}</Text>
            </View>
            <View className="temp">{/* data temp */}</View>
            <View className="description">
              {/* data weather description */}
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
});
