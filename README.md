# Weatherly App

## Set-Up

This repository records my learning progress with React Native, having come from a React background with no prior knowledge of Native. 

Took a few trys, and eventually realised that the way to get this application to work is to do the following:

1. `npx expo -h`
2. `npx expo whoami` (in case you are already logged-in.)
3. `npx expo login` (at this point, it's a good idea to download Expo Go on mobile and create an account. thereafter, you will be prompted to enter your username and password in the terminal.)
4. `npx create-expo-app ProjectName` (after, make sure to cd to correct directory, so `cd ProjectName`)
5. `npx expo start`

I had trouble running this on my ExpoGo application, apparently due to faulty internet, so instead I prompted the extra few steps:

6. `npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1`
7. `npx expo start --web` (as seen in the package.json file)

This way I managed to get the basic default App.js to run. 