import { data } from "../data";
import React, { useState } from "react";
import { ProductCart } from "./ProductCart";
import { FlatList } from "react-native";

export const Hot = () => {
  const [products, setProducts] = useState(
    data.filter((item) => item.category === "hot")
  );
  return (
    <FlatList
      data={products}
      numColumns={products.length > 1 ? 2 : 1}
      nestedScrollEnabled
      keyExtractor={(_, id) => `${id}`}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: 24,
        display:"flex",
        alignItems:"center",
        backgroundColor: "white",
      }}
      renderItem={({ item }) => (
        <ProductCart image={item.image} name={item.name} />
      )}
    />
  );
};
