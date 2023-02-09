import { MainContext } from "../context/MainContext";
import React, { useState, useContext } from "react";
import { ProductCart1 } from "./ProductCart1";
import { FlatList } from "react-native";

export const Food = () => {
  const { products } = useContext(MainContext);
  const [productsFood, setProducts] = useState(
    products.filter((item: any) => item.category === "cake")
  );
  return (
    <FlatList
      data={productsFood}
      nestedScrollEnabled
      keyExtractor={(_, id) => `${id}`}
      showsVerticalScrollIndicator={false}
      numColumns={productsFood.length > 1 ? 2 : 1}
      contentContainerStyle={{
        paddingTop: 24,
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
      }}
      renderItem={({ item }) => (
        <ProductCart1 image={item.image} name={item.name} />
      )}
    />
  );
};
