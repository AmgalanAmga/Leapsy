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
import { MaterialIcons } from "@expo/vector-icons";
import { MainContext } from "../context/MainContext";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext, useRef, useEffect } from "react";

export const OTPVerifyScreen = () => {
  const navigate = useNavigation();
  const { confirmCode } = useContext(MainContext);
  const inputRef = useRef<TextInput>(null);
  const [number, setNumber] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const joinedNum = otp.join("")
  const handleChange = (val: string, id: number) => {
    const newOtp: string[] = [...otp];
    newOtp[id] = val.substring(val.length - 1);
    !val ? setCurrentIndex(id - 1) : setCurrentIndex(id + 1);

    setOtp(newOtp);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [currentIndex]);

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
          source={require("../assets/msg.png")}
          style={{ width: 35, height: 30, marginBottom: 15 }}
        />
        <Text className="font-medium text-2xl w-44 text-center mb-2">
          Enter code sent to your phone
        </Text>
        <Text className="text-sm font-normal text-black/50 mb-7">
          We sent it to the number +976 8864 2339
        </Text>
        <View className="flex flex-row items-center justify-center space-x-2">
          {otp.map((_, id) => (
            <TextInput
              ref={currentIndex === id ? inputRef : null}
              key={id}
              maxLength={1}
              keyboardType="number-pad"
              className="h-12 w-12 border-2 rounded bg-transparent text-center font-semibold text-xl border-gray-400 focus:border-gray-700 text-gray-400 focus:text-gray-700   transition"
              value={otp[id]}
              onChangeText={(val) => handleChange(val, id)}
            />
          ))}
        </View>
      </Pressable>
      <TouchableOpacity
        disabled={joinedNum.length !== 6}
        activeOpacity={0.8}
        onPress={() => confirmCode(joinedNum)}
        className={`bg-red-500 mx-3 mb-5 rounded-md ${
          joinedNum.length !== 6 ? "bg-gray-200" : "bg-[#D3A762]"
        }`}
      >
        <Text className="text-center text-white font-medium py-4">Enter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
