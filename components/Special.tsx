import { FlatList } from "react-native";
import { ProductCart1 } from "./ProductCart1";
import React, { useState, useContext } from "react";
import { MainContext } from "../context/MainContext";

export const Special = () => {
  const { products } = useContext(MainContext);
  const [productsSpecial, setProducts] = useState(
    products.filter((item: any) => item.category === "special")
  );
  return (
    <FlatList
      data={productsSpecial}
      nestedScrollEnabled
      keyExtractor={(_, id) => `${id}`}
      // numColumns={products.length >= 2 ? 2 : 1}
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
