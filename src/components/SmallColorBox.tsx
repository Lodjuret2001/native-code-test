import React from "react";
import { StyleSheet, View, Platform } from "react-native";

export default function SmallColorBox({ hexCode }: SmallColorBoxProps) {
  const styles = StyleSheet.create({
    box: {
      width: 30,
      height: 30,
      marginRight: 10,
      backgroundColor: hexCode,
      shadowColor: "#000",
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 1,
      elevation: 10,
    },
  });
  return <View style={styles.box} />;
}

type SmallColorBoxProps = {
  hexCode: string;
};
