import React from "react";
import Lottie from "lottie-react-native";
import { SafeAreaView, Text, View } from "react-native";

export const PaymentSuccess = () => {
  return (
    <SafeAreaView className="flex-1 z-30 absolute inset-0 ">
      <View className="w-full h-full bg-black/50 flex items-center justify-center">
        <Lottie
          source={require("../assets/96237-success.json")}
          autoPlay
          loop
        />
      </View>
    </SafeAreaView>
  );
};
