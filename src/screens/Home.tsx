import React, { useEffect } from "react";
import { HomeScreenProps } from "../@types/screenProps";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import SmallColorBox from "../components/SmallColorBox";
import useColors from "../hooks/useColors";

const Home = ({ navigation, route }: HomeScreenProps) => {
  const { message } = route.params;
  const newColor = route.params.newColor;
  const { colors, setColors, isRefreshing, handleRefresh } = useColors();

  useEffect(() => {
    if (newColor) {
      setColors((colors) => [newColor, ...colors]);
    }
  }, [newColor]);

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("CreateColorPalette", {
            colors: colors,
            name: "Create your Palette",
          })
        }
      >
        <Text style={styles.buttonText}>Create a new ColorPalette</Text>
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <FlatList
          data={colors}
          keyExtractor={({ id }) => id.toString()}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
          ListEmptyComponent={() => (
            <View>
              <Text>Loading Color data...</Text>
            </View>
          )}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.previewContainer}
              onPress={() =>
                navigation.navigate("ColorPalette", {
                  colors: item.colors,
                  name: item.paletteName,
                })
              }
            >
              <Text style={styles.buttonText}>
                See {item.paletteName} Colors!
              </Text>
              <FlatList
                style={styles.list}
                data={item.colors.slice(0, 5)}
                keyExtractor={(item) => item.hexCode}
                renderItem={({ item }) => (
                  <SmallColorBox hexCode={item.hexCode} />
                )}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    backgroundColor: "white",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    width: "100%",
  },
  previewContainer: {
    marginBottom: 20,
    marginLeft: 10,
  },
  list: {
    flexDirection: "row",
  },
  message: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "yellow",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
