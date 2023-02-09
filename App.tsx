import {
  MyBagScreen,
  DetailScreen,
  SplashScreen,
  SignupScreen,
  PaymentScreen,
  BottomTabScreen,
  OTPVerifyScreen,
} from "./screens";
import { screenNames } from "./screenNames";
import { MainProvider } from "./context/MainContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MainProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={screenNames.SPLASH}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name={screenNames.INITIAL}
            component={BottomTabScreen}
          />
          <Stack.Screen name={screenNames.SPLASH} component={SplashScreen} />
          <Stack.Screen name={screenNames.OTP} component={OTPVerifyScreen} />
          <Stack.Screen name={screenNames.DETAIL} component={DetailScreen} />
          <Stack.Screen name={screenNames.MYBAG} component={MyBagScreen} />
          <Stack.Screen name={screenNames.PAYMENT} component={PaymentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MainProvider>
  );
}
