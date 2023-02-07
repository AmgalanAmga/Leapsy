import React from "react";
import { screenNames } from "../screenNames";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View, Text, Image } from "react-native";

export const ProductCart = ({ image, name }: { name: string; image: any }) => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ marginBottom: 10 }}
      onPress={() => {
        navigate.navigate(
          screenNames.DETAIL as never,
          { name, image } as never
        );
      }}
    >
      <Image
        source={image}
        className="rounded-md"
        style={{ width: 159, height: 183, marginRight: 12 }}
      />
      <Text className="ml-1.5 mt-3">{name}</Text>
    </TouchableOpacity>
  );
};
