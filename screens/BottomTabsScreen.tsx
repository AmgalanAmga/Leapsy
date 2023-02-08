import { HomeScreen } from "./HomeScreen";
import { ScanScreen } from "./ScanScreen";
import { OrderScreen } from "./OrderScreen";
import { screenNames } from "../screenNames";
import { SignupScreen } from "./SignupScreen";
import { AntDesign } from "@expo/vector-icons";
import { ProfileScreen } from "./ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";

const BottomTab = createBottomTabNavigator();

export const BottomTabScreen = () => {
  const [user, setUser] = useState(false);
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {
          let iconName;
          if (route.name === screenNames.HOME) {
            iconName = "home";
          } else if (route.name === screenNames.SCAN) {
            iconName = "scan1";
          } else if (
            route.name === screenNames.ORDER ||
            route.name === screenNames.SIGNUP
          ) {
            iconName = "shoppingcart";
          } else if (route.name === screenNames.PROFILE) {
            iconName = "user";
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "#D3A762",
        tabBarInactiveTintColor: "#838383",
      })}
    >
      <BottomTab.Screen name={screenNames.HOME} component={HomeScreen} />
      <BottomTab.Screen name={screenNames.SCAN} component={ScanScreen} />
      <BottomTab.Screen
        name={screenNames.ORDER}
        component={user ? OrderScreen : SignupScreen}
      />
      {user && (
        <BottomTab.Screen
          name={screenNames.PROFILE}
          component={ProfileScreen}
        />
      )}
    </BottomTab.Navigator>
  );
};
