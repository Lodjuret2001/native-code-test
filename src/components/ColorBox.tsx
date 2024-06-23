import { StyleSheet, View, Text } from "react-native";
import pickTextColorBasedOnBg from "../util/pickTextColorBasedOnBg";

const ColorBox = ({ colorName, hexCode }: ColorBoxProps) => {
  const styles = StyleSheet.create({
    colorBox: {
      width: "100%",
      backgroundColor: hexCode,
      padding: 10,
      marginVertical: 5,
      shadowColor: "#000",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3,
      elevation: 10,
    },
    colorBoxText: {
      color: pickTextColorBasedOnBg(hexCode, "#fff", "#000"),
    },
  });

  return (
    <View style={styles.colorBox}>
      <Text style={styles.colorBoxText}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

type ColorBoxProps = {
  colorName: string;
  hexCode: string;
};

export default ColorBox;
