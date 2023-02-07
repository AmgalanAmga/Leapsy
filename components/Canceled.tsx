import { useState } from "react";
import { orders } from "../data";
import { OrderCart } from "./OrderCart";
import { View, ScrollView } from "react-native";

export const Canceled = () => {
  const [canceledOrders, setCanceledOrders] = useState(
    orders.filter((item) => item.status === "Canceled")
  );
  return (
    <View className="bg-white flex-1 flex-col py-6 px-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        {canceledOrders.map((item, id) => (
          <OrderCart key={id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};
