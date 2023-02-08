import auth from "@react-native-firebase/auth";
import { createContext, ReactNode, useState } from "react";

export const MainContext = createContext<any>(null);

export const MainProvider = ({ children }: { children: ReactNode }) => {
  const [confirm, setConfirm] = useState<any>(null);
  const [productsInBag, setProductsInBag] = useState([]);

  const registerWithPhoneNumber = async (number: string) => {
    try {
      const myPhoneNumber = "+976" + number;
      const confirmation = await auth().signInWithPhoneNumber(myPhoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(confirm);
  const confirmCode = async (code: string) => {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log("Invalid code.");
    }
  };
  const value: any = {
    confirmCode,
    registerWithPhoneNumber,
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
