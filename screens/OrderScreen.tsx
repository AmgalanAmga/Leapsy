import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Processing, Success, Canceled } from "../components";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopBar = createMaterialTopTabNavigator();

export const OrderScreen = () => {
  const navigate = useNavigation();
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex flex-row items-center justify-between mt-5">
        <TouchableOpacity
          onPress={() => navigate.goBack()}
          className="w-10 h-10 flex items-center justify-center rounded-full"
        >
          <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
        </TouchableOpacity>
        <Text className="font-bold text-lg">My Orders</Text>
        <View />
      </View>
      <TopBar.Navigator>
        <TopBar.Screen name="Processing" component={Processing} />
        <TopBar.Screen name="Success" component={Success} />
        <TopBar.Screen name="Canceled" component={Canceled} />
      </TopBar.Navigator>
    </SafeAreaView>
  );
};
