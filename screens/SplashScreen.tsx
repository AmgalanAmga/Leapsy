import { useEffect } from "react";
import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { screenNames } from "../screenNames";

export const SplashScreen = () => {
  const navigate = useNavigation();
  useEffect(() => {
    setTimeout(() => [navigate.navigate(screenNames.INITIAL as never)], 1500);
  }, []);
  return (
    <View className="bg-black1 absolute inset-0 flex-1 items-center justify-center">
      <Image
        source={require("../assets/Group.png")}
        style={{ width: 215, height: 165 }}
      />
    </View>
  );
};
