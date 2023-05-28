import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/background.jpeg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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
