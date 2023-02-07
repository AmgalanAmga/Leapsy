import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export const OrderCart = ({
  item: { date, id, quantity, status, totalPrice },
}: TOrderType) => {
  const d = new Date(date).toISOString().slice(0, 10);
  return (
    <View className="border border-[#EAEAEA] w-full h-[120px] rounded py-3 px-4 mb-6">
      <View className="flex flex-row justify-between">
        <View>
          <Text>Order #{id}</Text>
          <Text className="text-[11px] text-[#969495]">
            Quantity: {quantity}
          </Text>
        </View>
        <Text className="text-[#969495]">{d}</Text>
      </View>
      <Text className="text-sm text-right">Total Amount: ${totalPrice}</Text>
      <View className="flex flex-row items-center justify-between">
        <TouchableOpacity className="border w-24 py-1.5 rounded-md">
          <Text className="text-center">Detail</Text>
        </TouchableOpacity>
        <Text
          className={`${
            status === "Processing"
              ? "text-[#2F80ED]"
              : status === "Success"
              ? "text-[#2AA952]"
              : "text-[#F01F0E]"
          }`}
        >
          {status}
        </Text>
      </View>
    </View>
  );
};
