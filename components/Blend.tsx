import { FlatList } from "react-native";
import { ProductCart1 } from "./ProductCart1";
import React, { useState, useContext } from "react";
import { MainContext } from "../context/MainContext";

export const Blend = () => {
  const { products } = useContext(MainContext);
  const [productsBlend, setProducts] = useState(
    products.filter((item: any) => item.category === "blend")
  );
  return (
    <FlatList
      data={products}
      nestedScrollEnabled
      keyExtractor={(_, id) => `${id}`}
      showsVerticalScrollIndicator={false}
      numColumns={productsBlend.length > 1 ? 2 : 1}
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
