import { screenNames } from "../screenNames";
import { HomeScreen } from "./HomeScreen";
import { ScanScreen } from "./ScanScreen";
import { OrderScreen } from "./OrderScreen";
import { AntDesign } from "@expo/vector-icons";
import { ProfileScreen } from "./ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const BottomTab = createBottomTabNavigator();

export const BottomTabScreen = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Scan") {
            iconName = "scan1";
          } else if (route.name === "Order") {
            iconName = "shoppingcart";
          } else if (route.name === "Profile") {
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
      <BottomTab.Screen name={screenNames.ORDER} component={OrderScreen} />
      <BottomTab.Screen name={screenNames.PROFILE} component={ProfileScreen} />
    </BottomTab.Navigator>
  );
};
