import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useState, useContext, useEffect } from "react";
import { DetailBagBack } from "../components";
import { useRoute } from "@react-navigation/native";
import { MainContext } from "../context/MainContext";
import { coffeeCups, foamAndWhip } from "../constants";
import RNPickerSelect from "react-native-picker-select";
// import analytics from "@react-native-firebase/analytics";
// import crashlytics from "@react-native-firebase/crashlytics";

export const DetailScreen = () => {
  const { setProductsInBag, productsInBag } = useContext(MainContext);
  const [shots, setShots] = useState(1);
  const [current, setCurrent] = useState(0);
  const [detail, setDetail] = useState({
    image: "",
    shots,
    cupSize: "",
    name: "",
    price: "",
    foam: "",
    whip: "",
    status:"Processing"
  });
  const {
    params: { image, name },
  } = useRoute();
  useEffect(() => {
    setDetail({
      ...detail,
      image,
      name,
      shots,
      cupSize: "Small",
      price: "3.15",
    });
  }, [shots]);
  const addToCard = async () => {
    setProductsInBag([...productsInBag, detail]);
  };
  console.log(productsInBag)
  const analyticsTest = async () => {
    // await analytics().logEvent("products", detail);
    // await addToCard();
  };
  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <DetailBagBack />
      <Image
        source={image}
        resizeMode="cover"
        style={{ width: "100%", height: 300 }}
      />
      <ScrollView
        className="p-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <Text className="font-medium pb-4 border-b border-b-[#D3A762]">
          Size options
        </Text>
        <View className="flex flex-row justify-evenly mt-5">
          {coffeeCups.map(({ image, name, price }, id) => (
            <View key={id} className="flex flex-col items-center space-y-2">
              <Pressable
                onPress={() => {
                  setCurrent(id);
                  setDetail({ ...detail, cupSize: name, price });
                }}
                className={`${
                  current === id && "bg-[#D3A762]/30 border-2 border-[#D3A762]"
                } w-16 h-16 rounded-full flex items-center justify-center`}
              >
                <Image source={image} className="w-12 h-12" />
              </Pressable>
              <Text className="capitalize">{name}</Text>
              <Text className="text-xs text-gray-400">{price}$</Text>
            </View>
          ))}
        </View>
        <Text className="font-medium pb-4 border-b mt-12 mb-5 border-b-[#D3A762]">
          Flavor changes
        </Text>
        <View>
          <Text className="text-[#D3A762] mb-1">Shot</Text>
          <View className="flex flex-row justify-between items-center p-4 border border-[#D3A762] rounded">
            <Text className="font-medium">
              {shots} {shots > 1 ? "shots" : "shot"}
            </Text>
            <View className="flex flex-row space-x-1 items-center">
              <TouchableOpacity
                disabled={shots === 1}
                onPress={() => setShots((pre) => --pre)}
                activeOpacity={0.8}
              >
                <Text
                  className={`font-medium text-2xl px-3 text-[#D3A762] ${
                    shots === 1 && "text-gray-300"
                  }`}
                >
                  -
                </Text>
              </TouchableOpacity>
              <Text className="font-medium text-lg">{shots}</Text>
              <TouchableOpacity
                onPress={() => {
                  setShots((pre) => ++pre);
                }}
                activeOpacity={0.8}
              >
                <Text className="font-medium text-2xl px-3 text-[#D3A762]">
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {Object.entries(foamAndWhip).map(([name, arr], id) => {
          return (
            <View key={id} className="mt-3">
              <Text className="text-[#969495] mb-1 capitalize">{name}</Text>
              <View className="flex flex-row justify-between items-center p-4 border border-[#EAEAEA] rounded">
                <RNPickerSelect
                  onValueChange={(value) => {
                    name === "foam"
                      ? setDetail({ ...detail, foam: value })
                      : setDetail({ ...detail, whip: value });
                  }}
                  items={arr}
                />
              </View>
            </View>
          );
        })}
        <View>
          <Text className="font-medium pb-4 border-b mt-12 mb-5 border-b-[#D3A762]">
            Nutritional facts
          </Text>
          <Text className="py-2 mb-2 text-[#969495]">
            530 calories, 67g sugar, 21g fat
          </Text>
        </View>
        <TouchableOpacity
          onPress={addToCard}
          className="bg-[#D3A762] p-4  rounded"
        >
          <Text className="text-center text-white">Add To Bag</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
