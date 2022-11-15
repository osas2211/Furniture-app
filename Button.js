import React from "react"
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native"

export const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.btn}>
        <Text style={style.btn_text}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  btn: {
    backgroundColor: "#62442B",
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    width: Dimensions.get("window").width * 0.25,
    height: Dimensions.get("window").width * 0.25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    elevation: 20,
    shadowOpacity: 0.8,
    position: "absolute",
    top: 25,
    right: "13%",
  },
  btn_text: {
    color: "#fff",
    textTransform: "uppercase",
  },
})
