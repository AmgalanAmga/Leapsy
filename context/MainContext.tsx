import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { any } from "prop-types";
import { createContext, ReactNode, useState, useEffect } from "react";

export const MainContext = createContext<any>(null);

export const MainProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState("");
  const [confirm, setConfirm] = useState<any>(null);
  const [products, setProducts] = useState<any>([]);
  const [productsInBag, setProductsInBag] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await firestore().collection("products").get();
      const proArr: any = [];
      res.forEach((doc) => {
        const data = doc.data();
        proArr.push(data);
      });
      setProducts(proArr);
    })();
  }, []);
  const registerWithPhoneNumber = async (number: string) => {
    try {
      const myPhoneNumber = "+976" + number;
      const confirmation = await auth().signInWithPhoneNumber(myPhoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.log(error);
    }
  };

  const confirmCode = async (code: string) => {
    try {
      return await confirm.confirm(code);
    } catch (error) {
      console.log("Invalid code.");
    }
  };
  const value: any = {
    user,
    confirm,
    setUser,
    products,
    confirmCode,
    phone,
    setPhone,
    productsInBag,
    setProductsInBag,
    registerWithPhoneNumber,
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
