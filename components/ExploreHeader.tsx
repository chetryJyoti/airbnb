import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import * as Haptics from "expo-haptics";
import PriceCard from "./PriceCard";

const categories = [
  {
    name: "Cabins",
    icon: "house-siding",
  },
  {
    name: "Trending",
    icon: "local-fire-department",
  },
  {
    name: "City",
    icon: "apartment",
  },
  {
    name: "Beachfront",
    icon: "beach-access",
  },
  {
    name: "Countryside",
    icon: "nature-people",
  },
  {
    name: "Tiny homes",
    icon: "home",
  },
];
interface Props {
  onCategoryChanged: (category: string) => void;
}

const ExploreHeader = ({ onCategoryChanged }: Props) => {
  const itemRef = useRef<Array<TouchableOpacity | null>>([]);
  const scrollRef = useRef<ScrollView>(null);

  const [activeIndex, setactiveIndex] = useState(0);

  const selectedCategory = (index: number) => {
    const selected = itemRef.current[index];

    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x - 20, y: 0, animated: true });
    });

    setactiveIndex(index);

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onCategoryChanged(categories[index].name);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <Link href={"/(modals)/booking"} asChild>
            <TouchableOpacity style={styles.searchBtn}>
              <Ionicons name="search" size={24} />
              <View>
                <Text style={{ fontFamily: "mon-semi-bold", marginBottom: 1 }}>
                  Where to?
                </Text>
                <Text style={styles.searchText}>Anywhere · Any week</Text>
              </View>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options-outline" size={20} />
          </TouchableOpacity>
        </View>

        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            gap: 20,
            paddingHorizontal: 20,
          }}
        >
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              ref={(el) => (itemRef.current[index] = el)}
              style={
                activeIndex === index
                  ? styles.categoriesActiveBtn
                  : styles.categoriesBtn
              }
              onPress={() => selectedCategory(index)}
            >
              <MaterialIcons
                name={item.icon as any}
                size={36}
                color={activeIndex === index ? "#000" : Colors.grey}
              />
              <Text
                style={
                  activeIndex === index
                    ? styles.categoryTextActive
                    : styles.categoryText
                }
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 180,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingBottom: 16,
    gap: 5,
  },
  filterBtn: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Colors.grey,
  },
  searchBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#c2c2c2",
    padding: 18,
    borderRadius: 34,
    backgroundColor: "#fff",

    elevation: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  searchText: {
    fontSize: 13,
    fontFamily: "mon",
    color: Colors.grey,
  },
  categoriesBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingBottom: 8,
  },
  categoriesActiveBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingBottom: 8,
    borderBottomColor: "#000",
    borderBottomWidth: 2,
  },
  categoryTextActive: {
    color: "#000",
    fontFamily: "mon-semi-bold",
  },
  categoryText: {
    color: Colors.grey,
    fontFamily: "mon-semi-bold",
  },
});

export default ExploreHeader;
