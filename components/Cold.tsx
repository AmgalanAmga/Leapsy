import { data } from "../data";
import React, { useState } from "react";
import { ProductCart } from "./ProductCart";
import { FlatList } from "react-native";

export const Cold = () => {
  const [products, setProducts] = useState(
    data.filter((item) => item.category === "cold")
  );
  return (
    <FlatList
      data={products}
      nestedScrollEnabled
      keyExtractor={(_, id) => `${id}`}
      showsVerticalScrollIndicator={false}
      numColumns={products.length > 1 ? 2 : 1}
      contentContainerStyle={{
        paddingTop: 24,
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
      }}
      renderItem={({ item }) => (
        <ProductCart image={item.image} name={item.name} />
      )}
    />
  );
};
