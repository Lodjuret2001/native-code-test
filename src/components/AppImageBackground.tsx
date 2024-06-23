import { StyleSheet, ImageBackground } from "react-native";
import React from "react";

const AppImageBackground = () => {
  const image = {
    uri: "https://wallpapers.com/images/hd/young-uzumaki-naruto-mobile-4k-o6gmcezwf7nhxv65.jpg",
  };

  return (
    <ImageBackground
      source={image}
      style={styles.backgroundImage}
      blurRadius={3}
    />
  );
};

export default AppImageBackground;

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});
