import { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export const ScanScreen = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [scanned, setScanned] = useState<boolean>(false);
  const [permissions, setPermission] = useState<boolean>(false);
  const [text, setText] = useState<string>("Not yet scanned");
  const askingCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setPermission(status === "granted");
  };
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }
  const handleBarCodeScanner = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanned(true);
    setText(data);
    console.log(data, type);
  };
  useEffect(() => {}, []);
  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      {permission === null ? (
        <Text>Requesting for camera permission</Text>
      ) : permissions == false ? (
        <View>
          {/* <Text className="mb-2">No access to camera</Text>
          <Button title="Allow camera" onPress={askingCameraPermission} /> */}
          <Camera
            barCodeScannerSettings={{
              barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
            }}
            type={type}
          >
            <View>
              <TouchableOpacity onPress={toggleCameraType}>
                <Text>Flip Camera</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      ) : (
        <View>
          <View>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanner}
              style={{ width: 320, height: 320 }}
            />
          </View>
          {scanned && (
            <Button title="Scan again" onPress={() => setScanned(false)} />
          )}
        </View>
      )}
    </SafeAreaView>
  );
};
