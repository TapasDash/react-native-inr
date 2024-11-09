import { View, Text, TextInput, Pressable } from "react-native";
import { Platform } from "react-native";
import { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const PnrStatus = () => {
  const [pnrStatus, setPnrStatus] = useState("");
  const handleGetPnrStatus = async () => {
    try {
      const response = await axios.post("your-api-endpoint", {
        pnr: pnrNumber,
      });

      if (response.status === 200) {
        navigation.navigate("PnrDetails", { data: response.data });
      } else {
        console.error("API request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching PNR status:", error);
    }
  };
  // const textInputMobileStyle = "w-10/12 h-16 border-slate-900 border-2 rounded";
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 items-center justify-center">
        <TextInput
          className="w-10/12 h-16 border-slate-900 border-2 rounded p-3 tracking-widest"
          // tracking-widest is for letter spacing
          value={pnrStatus}
          placeholder="  Enter your 10 digit PNR number"
          keyboardType="numeric"
          onChangeText={(pnrStatus) => setPnrStatus(pnrStatus)}
        />
        <Pressable
          className="bg-blue-500 w-10/12 p-3 mt-5 rounded"
          onPress={handleGetPnrStatus}
        >
          <Text className="text-center">Get PNR Status</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default PnrStatus;
