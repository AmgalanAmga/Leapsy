import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MyBagCart } from "../components";
import { screenNames } from "../screenNames";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const MyBagScreen = () => {
  const navigate = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex flex-row items-center justify-between mt-5 border-b border-b-[#EAEAEA] pb-4">
        <TouchableOpacity
          onPress={() => navigate.goBack()}
          className="w-10 h-10 flex items-center justify-center rounded-full"
        >
          <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
        </TouchableOpacity>
        <Text className="font-bold text-lg">My Orders</Text>
        <View />
      </View>
      <View className="py-6 px-4">
        <Text className="font-medium mb-5">Order items (2)</Text>
        <ScrollView className="h-80">
          <MyBagCart />
          <MyBagCart />
        </ScrollView>
        <View className="space-y-2">
          <View className="flex flex-row justify-between">
            <Text className="text-[#2D2A2B] text-[13px]">Subtotal</Text>
            <Text className="text-[#2D2A2B] text-[13px]">$10.56</Text>
          </View>
          <View className="flex flex-row justify-between">
            <Text className="text-[#2D2A2B] text-[13px]">Tax & Fees</Text>
            <Text className="text-[#2D2A2B] text-[13px]">$0.55</Text>
          </View>
          <View className="flex flex-row justify-between">
            <Text className="font-medium">Total</Text>
            <Text className="font-medium">$ 7.30</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigate.navigate(screenNames.PAYMENT as never);
        }}
        className="bg-[#D3A762] rounded absolute bottom-2 left-4 right-4"
      >
        <Text className="text-white font-medium text-center py-4">
          Check out $7.30
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
