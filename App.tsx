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
import { ReduxProvider } from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ReduxProvider>
      <SplashScreen />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name={screenNames.SIGNUP} component={SignupScreen} /> */}
          {/* <Stack.Screen name={screenNames.OTP} component={OTPVerifyScreen} /> */}
          <Stack.Screen
            name={screenNames.INITIAL}
            component={BottomTabScreen}
          />
          <Stack.Screen name={screenNames.DETAIL} component={DetailScreen} />
          <Stack.Screen name={screenNames.MYBAG} component={MyBagScreen} />
          <Stack.Screen name={screenNames.PAYMENT} component={PaymentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
