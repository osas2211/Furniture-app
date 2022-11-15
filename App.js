import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image } from "react-native"
import { Button } from "./Button"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: -20 }}>
        <Image source={require("./assets/lights.png")} />
      </View>
      <View
        style={{
          position: "absolute",
          right: 27,
          top: 275,
        }}
      >
        <Image source={require("./assets/sketch.png")} />
      </View>
      <View>
        <Text
          style={{
            fontSize: 54,
            marginTop: -70,
            paddingLeft: 24,
            fontWeight: "700",
            lineHeight: 60,
            color: "#262525",
          }}
        >
          Elegant Simple Furnitures.
        </Text>
      </View>
      <View>
        <Text
          style={{
            paddingLeft: 72,
            paddingRight: 120,
            marginTop: 20,
            color: "#645F57",
          }}
        >
          Affordable home furniture designs & ideas.
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          left: 115,
          top: 670,
        }}
      >
        <Image source={require("./assets/arrow.png")} />
      </View>
      <Button text={"Start"} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DAD3C8",
    position: "relative",
  },
})
