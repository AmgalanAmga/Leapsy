import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useState, useContext } from "react";
import { cardArr, methodArr } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { MainContext } from "../context/MainContext";
import { useNavigation } from "@react-navigation/native";
import { AddNewCard, PaymentSuccess } from "../components";
import firestore from "@react-native-firebase/firestore";

export const PaymentScreen = () => {
  const navigate = useNavigation();
  const [onSuccess, setOnSuccess] = useState(false);
  const { productsInBag, user } = useContext(MainContext);
  const [openModal, setOpenModal] = useState(false);
  const paymentOrder = async () => {
    setOnSuccess(true);
    productsInBag.forEach((product: any) => {
      firestore().collection("orders").doc(user).collection("myOrder").add(product)
    });
    setTimeout(() => {
      setOnSuccess(false);
    }, 2000);
  };
  return (
    <>
      <SafeAreaView className="bg-white flex-1">
        <View className="flex flex-row items-center justify-between mt-5 border-b border-b-[#EAEAEA] pb-2">
          <TouchableOpacity
            onPress={() => navigate.goBack()}
            className="w-10 h-10 flex items-center justify-center rounded-full"
          >
            <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
          </TouchableOpacity>
          <Text className="font-bold text-lg">Payment</Text>
          <View />
        </View>
        <View className="py-6 px-4">
          <Text className="font-medium">Credit card</Text>
          {cardArr.map((item, id) => (
            <TouchableOpacity
              key={id}
              onPress={paymentOrder}
              className="flex flex-row items-center justify-between p-3 rounded mt-4 border border-[#EAEAEA]"
            >
              <View className="flex flex-row items-center space-x-7">
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{ width: 38, height: 18 }}
                />
                <View>
                  <Text className="text-xs">{item.card}</Text>
                  <View className="flex flex-row space-x-5">
                    <Text className="text-xs">{item.type}</Text>
                    <Text className="text-xs">{item.cardNumber}</Text>
                  </View>
                </View>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color={"black"}
              />
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            onPress={() => setOpenModal(true)}
            className="border mt-4 border-[#D3A762] rounded-md"
          >
            <Text className="text-center my-3 text-[#D3A762]">
              Add new card
            </Text>
          </TouchableOpacity>
          <Text className="my-4 font-medium">Other methods</Text>
          {methodArr.map((item, id) => (
            <TouchableOpacity
              key={id}
              className="flex flex-row items-center justify-between p-3 rounded mt-4 border border-[#EAEAEA]"
            >
              <View className="flex flex-row items-center space-x-7">
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{ width: 38, height: 28 }}
                />
                <View>
                  <Text className="text-xs">{item.card}</Text>
                  <View className="flex flex-row space-x-5">
                    <Text className="text-xs">{item.type}</Text>
                  </View>
                </View>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color={"black"}
              />
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
      <AddNewCard setOpenModal={setOpenModal} openModal={openModal} />
      {onSuccess && <PaymentSuccess />}
    </>
  );
};
