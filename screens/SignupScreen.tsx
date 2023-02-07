import {
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const SignupScreen = () => {
  const navigate = useNavigation();
  const [number, setNumber] = useState<string>("");
  return (
    <SafeAreaView className="bg-white flex-1 flex-col justify-between">
      <TouchableOpacity
        onPress={() => navigate.goBack()}
        className="w-10 h-10 flex justify-start mt-6 ml-3"
      >
        <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
      </TouchableOpacity>
      <View className="flex items-center justify-center">
        <Image
          source={require("../assets/phoneFrame.png")}
          style={{ width: 20, height: 30, marginBottom: 15 }}
        />
        <Text className="font-medium text-2xl w-44 text-center mb-2">
          Enter your mobile number
        </Text>
        <Text className="text-sm font-normal text-black/50 mb-7">
          We will send confirmation code
        </Text>
        <View className="flex flex-row items-center">
          <Text className="text-xl text-black/50 font-medium">+976</Text>
          <TextInput
            keyboardType="phone-pad"
            onChangeText={(val) => setNumber(val)}
            className="w-48 border-b border-b-green-100"
          />
        </View>
      </View>
      <TouchableOpacity
        disabled={number === ""}
        activeOpacity={0.8}
        className={`bg-red-500 mx-3 mb-5 rounded-md ${
          number === "" ? "bg-gray-200" : "bg-[#D3A762]"
        }`}
      >
        <Text className="text-center text-white font-medium py-4">Enter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
