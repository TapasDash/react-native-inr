import { View, Text, TextInput, Pressable } from "react-native";
import { Platform } from "react-native";
import { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const PnrStatus = () => {
  const [pnrStatus, setPnrStatus] = useState("");
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
        <Pressable className="bg-blue-500 w-10/12 p-3 mt-5 rounded ">
          <Text className="text-center">Get PNR Status</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default PnrStatus;
