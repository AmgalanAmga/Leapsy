import { data } from "../data";
import { MainContext } from "../context/MainContext";
import React, { useState, useContext } from "react";
import { ProductCart1 } from "./ProductCart1";
import { FlatList } from "react-native";

export const Cold = () => {
  const { products } = useContext(MainContext);
  const [productsCold, setProducts] = useState(
    products.filter((item: any) => item.category === "cold")
  );
  return (
    <FlatList
      data={productsCold}
      nestedScrollEnabled
      keyExtractor={(_, id) => `${id}`}
      showsVerticalScrollIndicator={false}
      numColumns={productsCold.length > 1 ? 2 : 1}
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
