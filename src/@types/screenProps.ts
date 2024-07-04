import type { StackScreenProps } from "@react-navigation/stack";
import { Color, ColorData } from "../hooks/useColors";

export type StackParamList = {
  Home: { message: string; newColor?: ColorData };
  ColorPalette: { colors: Color[]; name: string };
  CreateColorPalette: { colors: ColorData[]; name: string };
};

export type HomeScreenProps = StackScreenProps<StackParamList, "Home">;

export type ColorPaletteScreenProps = StackScreenProps<
  StackParamList,
  "ColorPalette"
>;

export type CreateColorPaletteModalProps = StackScreenProps<
  StackParamList,
  "CreateColorPalette"
>;
