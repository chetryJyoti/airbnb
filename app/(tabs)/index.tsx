import { View, Text } from "react-native";
import React, { useState, useMemo } from "react";
import { Link, Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import listingData from "@/assets/dummyData/airbnb-listings.json";

const Explore = () => {
  const [category, setCategory] = useState("Apartments");

  const listings = useMemo(() => listingData as any, []);

  const onDataChanged = (category: string) => {
    console.log(category);
    setCategory(category);
  };
  return (
    <View style={{ flex: 1, marginTop: 150 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <Listings listings={listings} category={category} />
    </View>
  );
};

export default Explore;
