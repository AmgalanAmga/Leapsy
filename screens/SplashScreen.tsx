import { Image, View } from "react-native";

export const SplashScreen = () => {
  return (
    <View className="bg-black1 absolute inset-0 flex-1 items-center justify-center">
      <Image
        source={require("../assets/Group.png")}
        style={{ width: 215, height: 165 }}
      />
    </View>
  );
};
