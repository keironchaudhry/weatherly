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
        alert(error.message);
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
          <View style={styles.top}>
            <View>
              <Text style={styles.location}>{data.name}</Text>
            </View>
            <View>
              {data.main ? (
                <Text style={styles.temperature}>
                  {data.main.temp.toFixed()}°C
                </Text>
              ) : null}
            </View>
            <View>
              {data.weather ? (
                <Text style={styles.description}>{data.weather[0].main}</Text>
              ) : null}
            </View>
          </View>
          <View style={styles.bottom}>
            <View className="feels">
              {data.main ? (
                <Text style={styles.bold}>
                  {data.main.feels_like.toFixed()}°C
                </Text>
              ) : null}
              <Text style={styles.paragraph}>Feels like</Text>
            </View>
            <View className="humidity">
              {data.main ? (
                <Text style={styles.bold}>{data.main.humidity}%</Text>
              ) : null}
              <Text style={styles.paragraph}>Humidity</Text>
            </View>
            <View className="wind">
              {data.wind ? (
                <Text style={styles.bold}>{data.wind.speed.toFixed()} mph</Text>
              ) : null}
              <Text style={styles.paragraph}>Wind Speed</Text>
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
    margin: 50,
  },
  location: {
    color: "#fff",
    marginLeft: -40,
  },
  temperature: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 70,
    marginLeft: -40,
  },
  description: {
    color: "#fff",
    position: "relative",
    transformOrigin: 0,
    transform: "rotate(270deg)",
    left: 210,
    fontSize: 20,
  },
  bottom: {
    display: "flexbox",
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "90%",
    marginVertical: 32,
    marginTop: 375,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  bold: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  paragraph: {
    color: "#fff",
  },
});
