import {
  Text,
  View,
  Image,
  Keyboard,
  TextInput,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { screenNames } from "../screenNames";
import { MaterialIcons } from "@expo/vector-icons";
import { MainContext } from "../context/MainContext";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext, useEffect } from "react";

export const SignupScreen = () => {
  const navigate = useNavigation();
  const { registerWithPhoneNumber,phone, setPhone } = useContext(MainContext);
  return (
    <SafeAreaView className="bg-white flex-1 flex-col justify-between">
      <TouchableOpacity
        onPress={() => navigate.goBack()}
        className="w-10 h-10 flex justify-start mt-6 ml-3"
      >
        <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
      </TouchableOpacity>
      <Pressable
        onPress={() => Keyboard.dismiss()}
        className="flex items-center justify-center"
      >
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
            maxLength={8}
            keyboardType="phone-pad"
            onChangeText={(val) => setPhone(val)}
            className="w-48 border-b border-b-green-100"
          />
        </View>
      </Pressable>
      <TouchableOpacity
        disabled={phone.length !== 8}
        activeOpacity={0.8}
        onPress={async () => {
          await registerWithPhoneNumber(phone);
          navigate.navigate(screenNames.OTP as never);
        }}
        className={`bg-red-500 mx-3 mb-5 rounded-md ${
          phone.length !== 8 ? "bg-gray-200" : "bg-[#D3A762]"
        }`}
      >
        <Text className="text-center text-white font-medium py-4">Enter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
