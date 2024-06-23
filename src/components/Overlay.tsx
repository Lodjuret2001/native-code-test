import React from "react";
import { StyleSheet, View } from "react-native";

const Overlay = () => {
  return <View style={styles.overlay} />;
};

export default Overlay;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.5,
  },
});
