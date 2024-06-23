import React from "react";
import { StyleSheet, Text, View, Platform, FlatList } from "react-native";
import { ColorPaletteScreenProps } from "../@types/screenProps";
import ColorBox from "../components/ColorBox";
import AppImageBackground from "../components/AppImageBackground";
import Overlay from "../components/Overlay";

const ColorPalette = ({ route }: ColorPaletteScreenProps) => {
  const { colors, name } = route.params;
  return (
    <>
      <View style={styles.container}>
        <AppImageBackground />
        <Overlay />
        <View style={styles.innerContainer}>
          {Platform.OS === "ios" ? (
            <Text style={styles.text}>Hello Apple!</Text>
          ) : (
            <Text style={styles.text}>Hello Android!</Text>
          )}
          <View style={styles.colorContainer}>
            <Text style={styles.colorBoxesHeading}>
              Here are the {name} colors:
            </Text>
            <FlatList
              style={{ flex: 1, width: "95%" }}
              contentContainerStyle={{ paddingBottom: 5 }}
              data={colors}
              keyExtractor={(item) => item.hexCode}
              renderItem={({ item }) => (
                <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
              )}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default ColorPalette;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "transparent",
    width: "100%",
    alignItems: "center",
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    borderColor: "pink",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 20,
    borderRadius: 10,
    width: "90%",
    flex: 0.8,
  },
  text: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "pink",
    padding: 20,
    borderRadius: 20,
    overflow: "hidden",
  },
  colorContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    width: "95%",
    flex: 0.95,
    padding: 10,
    borderRadius: 10,
  },
  colorBoxesHeading: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 20,
    textDecorationLine: "underline",
  },
});
