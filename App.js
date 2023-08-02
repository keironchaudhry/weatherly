import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Keyboard,
  View,
  ImageBackground,
} from "react-native";

import axios from "axios";
import WeatherlyTop from "./components/WeatherlyTop";
import WeatherlyBottom from "./components/WeatherlyBottom";

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const searchLocation = (event) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=a293bc6acc6834526730bb1203942cec`
      )
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Location not found. Please enter a valid location.");
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
            placeholderTextColor={"#fff"}
            value={location}
            onChangeText={setLocation}
            onSubmitEditing={searchLocation}
            onKeyDown={handleKeyPress}
          />
        </View>
        <View>
          <WeatherlyTop data={data} />
          {data.name !== undefined && <WeatherlyBottom data={data} />}
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
