import React from "react";
import { Link, Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: "mon-semi-bold",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="search" color={color} size={size} />;
          },
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="wishlists"
        options={{
          title: "Wishlists",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="heart-outline" color={color} size={size} />;
          },
          headerShown: false,
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="trips"
        options={{
          title: "Trips",
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="airbnb" color={color} size={size} />;
          },
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="message-outline"
                color={color}
                size={size}
              />
            );
          },
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => {
            return (
              <FontAwesome5 name="user-circle" color={color} size={size} />
            );
          },
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
