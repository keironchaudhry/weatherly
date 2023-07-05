import React from "react";
import { StyleSheet, Text, View } from "react-native";

const WeatherlyBottom = (props) => {
  const { data } = props;
  return (
    <View style={styles.bottom}>
      <View className="feels">
        {data.main ? (
          <Text style={styles.bold}>{data.main.feels_like.toFixed()}°C</Text>
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
  );
};

const styles = StyleSheet.create({
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

export default WeatherlyBottom;
