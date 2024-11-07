import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-50">
      <Text>Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        Go to Profile page
      </Link>
    </View>
  );
}
