import type { StackScreenProps } from "@react-navigation/stack";
import { Color } from "../hooks/useColors";

export type StackParamList = {
  Home: { message: string };
  ColorPalette: { colors: Color[]; name: string };
};

export type HomeScreenProps = StackScreenProps<StackParamList, "Home">;

export type ColorPaletteScreenProps = StackScreenProps<
  StackParamList,
  "ColorPalette"
>;
