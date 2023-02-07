import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";

export const MyBagCart = () => {
  return (
    <View className="flex flex-row pb-5 mb-5 border-b-2 border-b-[#EAEAEA]">
      <Image
        source={{
          uri: "https://images.pexels.com/photos/4108288/pexels-photo-4108288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
        style={{ width: 96, height: 96, borderRadius: 8 }}
      />
      <View className="flex flex-row justify-between w-60 px-4">
        <View>
          <Text className="font-medium">Hot Chocolate</Text>
          <Text>$3.12 / spruce</Text>
        </View>
        <AntDesign name="close" size={20} />
      </View>
    </View>
  );
};
