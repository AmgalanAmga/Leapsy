import { data } from "../data";
import React, { useState } from "react";
import { ProductCart } from "./ProductCart";
import { FlatList } from "react-native";

export const Blend = () => {
  const [products, setProducts] = useState(
    data.filter((item) => item.category === "blend")
  );
  return (
    <FlatList
      data={products}
      nestedScrollEnabled
      numColumns={products.length > 1 ? 2 : 1}
      contentContainerStyle={{ paddingTop: 24,  backgroundColor: "white" }}
      renderItem={({ item }) => (
        <ProductCart image={item.image} name={item.name} />
      )}
    />
  );
};
