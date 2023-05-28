import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  
  return (
    <ImageBackground
      source={require("./assets/background.jpeg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
