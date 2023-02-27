import { useContext } from "react";
import auth from "@react-native-firebase/auth";
import { MainContext } from "../context/MainContext";
import { View, Text, SafeAreaView, Image, Pressable } from "react-native";

export const ProfileScreen = () => {
  const { user } = useContext(MainContext);

  return (
    <SafeAreaView className="bg-white flex-1 items-center justify-center">
      <View className="rounded-full overflow-hidden w-16 h-16">
        <Image
          source={{
            uri: "https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={{ width: 64, height: 64 }}
        />
      </View>
      <Text className="mt-2">{user}</Text>
      <Pressable onPress={async () => await auth().signOut()}>
        <Image
          source={require("../assets/logout.png")}
          style={{ width: 150, height: 50 }}
          resizeMode="contain"
        />
      </Pressable>
    </SafeAreaView>
  );
};
