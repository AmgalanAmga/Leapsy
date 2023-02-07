import { useState } from "react";
import { orders } from "../data";
import { OrderCart } from "./OrderCart";
import { View, ScrollView } from "react-native";

export const Success = () => {
  const [successOrders, setSuccessOrders] = useState(
    orders.filter((item) => item.status === "Success")
  );
  return (
    <View className="bg-white flex-1 flex-col py-6 px-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        {successOrders.map((item, id) => (
          <OrderCart key={id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};
