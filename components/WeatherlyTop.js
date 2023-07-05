import React from "react";
import { StyleSheet, Text, View } from "react-native";

const WeatherlyTop = (props) => {
  const { data } = props;
  return (
    <View style={styles.top}>
      <View>
        <Text style={styles.location}>{data.name}</Text>
      </View>
      <View>
        {data.main ? (
          <Text style={styles.temperature}>{data.main.temp.toFixed()}°C</Text>
        ) : null}
      </View>
      <View>
        {data.weather ? (
          <Text style={styles.description}>{data.weather[0].main}</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default WeatherlyTop;
