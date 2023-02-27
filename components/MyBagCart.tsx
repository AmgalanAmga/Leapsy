import { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MainContext } from "../context/MainContext";

export const MyBagCart = (props: TOrderProps) => {
  const { productsInBag,setProductsInBag } = useContext(MainContext);
  const { name, image, price, cupSize } = props.el;
  const deleteItem = () => {
    setProductsInBag(productsInBag.filter((el: any) => el.name !== name));
  };
  return (
    <View className="flex flex-row pb-5 mb-5 border-b-2 border-b-[#EAEAEA]">
      <Image
        source={require(`../assets/2.png`)}
        style={{ width: 96, height: 96, borderRadius: 8 }}
      />
      <View className="flex flex-row justify-between w-60 px-4">
        <View>
          <Text className="font-medium">{name}</Text>
          <Text>
            ${price} / {cupSize}
          </Text>
        </View>
        <TouchableOpacity onPress={deleteItem}>
          <AntDesign name="close" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
