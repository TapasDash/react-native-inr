import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const GetTrainBetweenStations = () => {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 items-center justify-center">
        <TextInput
          className="w-10/12 h-16 border-slate-600 border-2 rounded p-3 tracking-widest"
          // tracking-widest is for letter spacing
          value={fromStation}
          placeholder="From Station"
          onChangeText={(fromStation) => setFromStation(fromStation)}
        />
        <MaterialIcons
          name="swap-vertical-circle"
          size={48}
          color="black"
          className="py-1"
        />
        <TextInput
          className="w-10/12 h-16 border-slate-600 border-2 rounded p-3  tracking-widest"
          // tracking-widest is for letter spacing
          value={toStation}
          placeholder="To Staion"
          onChangeText={(toStation) => setToStation(toStation)}
        />
        <Pressable className="bg-blue-500 w-10/12 p-3 mt-6 rounded">
          <Text className="text-center">Get Trains Between Stations</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default GetTrainBetweenStations;
