// import { StyleSheet, Text, View } from "react-native";
// import { Image } from "expo-image";

// import React from "react";
// import { Tabs } from "expo-router";
// import { Icons } from "@/constants/icons";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// import Ionicons from "@expo/vector-icons/Ionicons";
// // const TabIcon = ({ color, name, focused }: any) => {
// //   return (
// //     <View>
// //       <Image contentFit="contain" tintColor={color} className="w-1/6 h-1/6" />
// //       <Text className={`${focused ? "font-psemibold" : "font-pregular"}`}>
// //         {name}
// //       </Text>
// //     </View>
// //   );
// // };

// const TabsLayout = () => {
//   return (
//     <>
//       <Tabs screenOptions={{ tabBarActiveTintColor: "black" }}>
//         <Tabs.Screen
//           name="pnrStatus"
//           options={{
//             title: "PNR Status",
//             headerShown: true,
//             tabBarIcon: ({ color, focused }) => (
//               <Ionicons
//                 name="newspaper-outline"
//                 size={24}
//                 color={color}
//                 className=""
//               />
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="getTrainsBetweenStations"
//           options={{
//             title: "Get Trains Between Stations",
//             headerShown: true,
//             tabBarIcon: ({ color, focused }) => (
//               <MaterialCommunityIcons
//                 name="train-car-passenger-door"
//                 size={40}
//                 color="black"
//               />
//             ),
//           }}
//         />
//       </Tabs>
//     </>
//   );
// };

// export default TabsLayout;
