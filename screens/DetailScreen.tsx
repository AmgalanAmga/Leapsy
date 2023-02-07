import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { DetailBagBack } from "../components";
import { useRoute } from "@react-navigation/native";
import { coffeeCups, foamAndWhip } from "../constants";
import RNPickerSelect from "react-native-picker-select";

export const DetailScreen = () => {
  const [current, setCurrent] = useState(0);
  const {
    params: { image },
  } = useRoute();
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
          {Object.entries(coffeeCups).map(([name, el], id) => (
            <View key={id} className="flex flex-col items-center space-y-2">
              <Pressable
                onPress={() => setCurrent(id)}
                className={`${
                  current === id && "bg-[#D3A762]/30 border-2 border-[#D3A762]"
                } w-16 h-16 rounded-full flex items-center justify-center`}
              >
                <Image source={el} className="w-12 h-12" />
              </Pressable>
              <Text className="capitalize">{name}</Text>
            </View>
          ))}
        </View>
        <Text className="font-medium pb-4 border-b mt-12 mb-5 border-b-[#D3A762]">
          Flavor changes
        </Text>
        <View>
          <Text className="text-[#D3A762] mb-1">Shot</Text>
          <View className="flex flex-row justify-between items-center p-4 border border-[#D3A762] rounded">
            <Text className="font-medium">4 shots</Text>
            <View className="flex flex-row space-x-1 items-center">
              <TouchableOpacity activeOpacity={0.8}>
                <Text className="font-medium text-2xl px-3 text-[#D3A762]">
                  -
                </Text>
              </TouchableOpacity>
              <Text className="font-medium text-lg">0</Text>
              <TouchableOpacity activeOpacity={0.8}>
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
                  onValueChange={(value) => console.log(value)}
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
        <TouchableOpacity className="bg-[#D3A762] p-4  rounded">
          <Text className="text-center text-white">Add To Bag</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
