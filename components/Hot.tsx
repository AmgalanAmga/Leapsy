import { data } from "../data";
import { MainContext } from "../context/MainContext";
import React, { useState, useContext } from "react";
import { ProductCart1 } from "./ProductCart1";
import { FlatList } from "react-native";

export const Hot = () => {
  const { products } = useContext(MainContext);
  const [productsHot, setProducts] = useState(
    products.filter((item: any) => item.category === "hot")
  );
  return (
    <FlatList
      data={productsHot}
      numColumns={productsHot.length > 1 ? 2 : 1}
      nestedScrollEnabled
      keyExtractor={(_, id) => `${id}`}
      showsVerticalScrollIndicator={false}
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
