import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { AudioPro } from "react-native-audio-pro";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="play"
        onPress={() => {
          AudioPro.play({
            id: "remote-track-1",
            url: "https://rnap.dev/audio-soundhelix-song-1-tschurger.mp3",
            title: "Soundhelix Song 1",
            artwork: "https://rnap.dev/artwork-usgs-bAji8qv_LlY-unsplash.jpg",
            artist: "T. Schurger",
          });
        }}
      />
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
