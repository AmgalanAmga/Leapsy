import { BagIcon } from "../components/BagIcon";
import { View, Image, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const PageHeader = () => {
  return (
    <>
      <View className="flex flex-row items-center justify-between mt-5 mx-5">
        <View />
        <Image
          source={require("../assets/image.png")}
          style={{ width: 168, height: 25 }}
        />
        <BagIcon />
      </View>
      <View className="flex flex-row items-center justify-between bg-black1 py-3 px-4 mt-4">
        <View>
          <Text className="text-white/60 text-[10px]">Pick-up store</Text>
          <Text className="text-white text-[14px]">
            Barkley village * 0.5 mi
          </Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color={"white"} />
      </View>
    </>
  );
};
