import { orders } from "../data";
import { OrderCart } from "./OrderCart";
import { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const Processing = () => {
  const [processingOrders, setProcessingOrders] = useState(
    orders.filter((item) => item.status === "Processing")
  );
  useEffect(() => {
    (async () => {
      const ds = await getDocs(collection(db, "products"));
      console.log(ds);
    })();
  }, []);
  return (
    <View className="bg-white flex-1 flex-col py-6 px-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        {processingOrders.map((item, id) => (
          <OrderCart key={id} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};
