import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Switch,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { CreateColorPaletteModalProps } from "../@types/screenProps";
import ColorBox from "../components/ColorBox";
import { Color, ColorData } from "../hooks/useColors";

const CreateColorPalette = ({
  route,
  navigation,
}: CreateColorPaletteModalProps) => {
  const { colors } = route.params;
  const [inputValue, setInputValue] = useState("");
  const [selectedColors, setSelectedColors] = useState<Color[]>([]);

  let newColors = [];
  newColors = colors.flatMap((palette) => palette.colors);

  const validateInputs = () => {
    if (!inputValue) {
      Alert.alert("Please enter a Palette name");
      return false;
    }
    if (inputValue.length < 3) {
      Alert.alert("You need to enter at least 3 characters");
      return false;
    }
    if (selectedColors.length === 0) {
      Alert.alert("You need to select a color");
      return false;
    }
    return true;
  };

  const handleAddColor = () => {
    if (validateInputs()) {
      const newColor = {
        id: colors.length + 1,
        paletteName: inputValue,
        colors: selectedColors,
      };
      navigation.navigate("Home", {
        message: "You added a new color! :)",
        newColor: newColor,
      });
    }
  };

  const handleSwitch = (value: boolean, color: Color) => {
    if (value === true) {
      setSelectedColors((colors) => [color, ...colors]);
    } else {
      selectedColors.filter(
        (selected) => selected.colorName !== color.colorName
      );
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Enter your Palette name"
      />
      <Text>{inputValue}</Text>

      <FlatList
        data={newColors}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <View style={styles.innerContainer}>
            <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
            <Switch
              onValueChange={(value) => handleSwitch(value, item)}
              value={
                !!selectedColors.find((color) => color.hexCode === item.hexCode)
              }
              style={styles.switch}
            />
          </View>
        )}
        style={{ marginBottom: 10 }}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddColor}>
        <Text style={styles.buttonText}>Create a new ColorPalette</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateColorPalette;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  input: {
    width: "90%",
    marginTop: 10,
    padding: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
  switch: {
    marginLeft: 20,
  },
  innerContainer: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "yellow",
    padding: 20,
    marginBottom: 50,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
