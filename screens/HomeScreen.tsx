import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  Hot,
  Cold,
  Food,
  Blend,
  Special,
  PageHeader,
  ProductCart,
} from "../components";
import { myFavorite, seasonal } from "../data";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TopTab = createMaterialTopTabNavigator();

export const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white ">
      <PageHeader />
      <ScrollView
        nestedScrollEnabled
        className="p-5"
        contentContainerStyle={{ paddingBottom: 150 }}
      >
        <View className="flex flex-row items-center justify-between h-[204px] w-full bg-[#1E3932] px-6 rounded-md">
          <Text className="text-lg text-white font-medium w-40">
            HERE’S TO MORE SUNNY DAYS AHEAD!
          </Text>
          <Image
            source={require("../assets/Bitmap.png")}
            style={{ width: 164, height: 155 }}
          />
        </View>
        <Text className="mt-7 mb-3.5 text-base font-medium">
          Your favourite
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {myFavorite.map(({ image, name }, id) => (
            <ProductCart key={id} image={image} name={name} />
          ))}
        </ScrollView>
        <Text className="mt-7 mb-3.5 text-base font-medium">
          Seasonal drinks
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {seasonal.map(({ image, name }, id) => (
            <ProductCart key={id} image={image} name={name} />
          ))}
        </ScrollView>
        <View style={{ flex: 1, height: 600 }}>
          <TopTab.Navigator
            screenOptions={{
              tabBarLabelStyle: { fontSize: 10 },
            }}
          >
            <TopTab.Screen name="Special" component={Special} />
            <TopTab.Screen name="Hot" component={Hot} />
            <TopTab.Screen name="Cold" component={Cold} />
            <TopTab.Screen name="Food" component={Food} />
            <TopTab.Screen name="Blend" component={Blend} />
          </TopTab.Navigator>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
