import { useContext } from "react";
import { screenNames } from "../screenNames";
import { MainContext } from "../context/MainContext";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Text } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";

export const DetailBagBack = () => {
  const { productsInBag } = useContext(MainContext);
  const navigate = useNavigation();
  return (
    <View className="absolute top-14 flex flex-row items-center justify-between z-20 w-full px-5">
      <TouchableOpacity
        onPress={() => navigate.goBack()}
        className="w-10 h-10 bg-white/50 flex items-center justify-center rounded-full"
      >
        <MaterialIcons name="keyboard-arrow-left" size={30} color="white" />
      </TouchableOpacity>
      <View className="relative">
        <Text className="absolute -top-2 -left-2 z-10 p-1 rounded-full bg-[#D3A762]">
          {productsInBag.length}
        </Text>
        <TouchableOpacity
          onPress={() => navigate.navigate(screenNames.MYBAG as never)}
          className="w-10 h-10 bg-white/50 flex items-center justify-center rounded-full"
        >
          <Feather name="shopping-bag" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
