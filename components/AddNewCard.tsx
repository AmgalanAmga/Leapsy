import {
  View,
  Text,
  Modal,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { CheckPage } from "./CheckPage";
import { addNewCardInput } from "../constants";
import { AntDesign } from "@expo/vector-icons";
import { Dispatch, SetStateAction, useState } from "react";

export const AddNewCard = ({
  setOpenModal,
  openModal,
}: {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  openModal: boolean;
}) => {
  const [success, setSuccess] = useState(false);
  return (
    <>
      <Modal
        visible={openModal}
        animationType="slide"
        transparent={true}
        className="absolute inset-0"
        onRequestClose={() => {
          setOpenModal(false);
        }}
      >
        <StatusBar />
        <View className="absolute inset-0 bg-black/40">
          <View className="bg-white absolute bottom-0 inset-x-0 h-[572px] py-6 px-4">
            <View className="flex flex-row items-center justify-between pb-5 border-b-2 border-b-[#EAEAEA] mb-3">
              <Text className="text-[20px] font-bold">Add new card</Text>
              <TouchableOpacity onPress={() => setOpenModal(false)}>
                <AntDesign name="close" size={22} />
              </TouchableOpacity>
            </View>
            {addNewCardInput.map((item, id) => (
              <View
                key={id}
                className="border border-[#EAEAEA] rounded-md py-3 px-5 mb-3"
              >
                <Text className="text-xs text-[#969495]">{item.name}</Text>
                <TextInput
                  keyboardType={item.keyboardType}
                  placeholder={"Enter value..."}
                />
              </View>
            ))}
            <TouchableOpacity
              onPress={() => {
                setOpenModal(false);
                setSuccess(true);
              }}
              className="bg-[#D3A762] rounded absolute bottom-2 left-4 right-4"
            >
              <Text className="text-white font-medium text-center py-4">
                Save card
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <CheckPage success={success} setSuccess={setSuccess} />
    </>
  );
};
