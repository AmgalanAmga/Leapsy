import { View, Modal, Image } from "react-native";
import { Dispatch, SetStateAction } from "react";
export const CheckPage = ({
  success,
  setSuccess,
}: {
  setSuccess: Dispatch<SetStateAction<boolean>>;
  success: boolean;
}) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={success}
      className="absolute inset-0"
      onRequestClose={() => setSuccess(false)}
    >
      <View className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <View className="bg-white w-44 h-44 rounded-lg flex items-center justify-center">
          <Image
            source={require("../assets/checkIcon.png")}
            style={{ width: 78, height: 78 }}
          />
        </View>
      </View>
    </Modal>
  );
};
