import { useEffect, useState, useCallback } from "react";

const useColors = () => {
  const [colors, setColors] = useState<ColorData[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    setColors([]);
    setTimeout(() => {
      fetchColors();
    }, 2000);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 4000);
  }, []);

  const fetchColors = useCallback(async () => {
    try {
      setTimeout(async () => {
        const response = await fetch(
          "https://color-palette-api.kadikraman.vercel.app/palettes"
        );
        const data = await response.json();
        setColors(data);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchColors();
  }, []);

  return {
    colors,
    setColors,
    isRefreshing,
    handleRefresh,
  };
};

export type ColorData = {
  id: number;
  paletteName: string;
  colors: Color[];
};

export type Color = {
  colorName: string;
  hexCode: string;
};

export default useColors;
