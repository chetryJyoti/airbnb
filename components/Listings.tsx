import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import { Link } from "expo-router";
import { Listing } from "@/interfaces/listing";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  listings: any[];
  category: string;
}

const Listings = ({ listings, category }: Props) => {
  const [loading, setLoading] = useState(true);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    console.log("reload listings: ", category);
    console.log("listings:", listings.length);
  }, [category]);

  const wislistListing = (id: string) => {
    console.log("Wishlisted:", id);
  };

  const renderRow: ListRenderItem<Listing> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <View style={styles.listing}>
          <Image source={{ uri: item.medium_url }} style={styles.image} />
          <TouchableOpacity
            style={{ position: "absolute", right: 30, top: 28 }}
            onPress={() => {
              wislistListing(item.id);
            }}
          >
            <Ionicons name="heart-outline" size={24} color={"#fff"} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <Text style={{ fontSize: 16, fontFamily: "mon-semi-bold" }}>
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                gap: 4,
                // marginBottom: 12,
              }}
            >
              <Ionicons name="star" size={14} />
              <Text>{item.review_scores_rating}</Text>
            </View>
          </View>
          <Text style={{ fontFamily: "mon" }}>{item.room_type}</Text>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <Text style={{ fontFamily: "mon-bold" }}>₹ {item.price}</Text>
            <Text style={{ fontFamily: "mon" }}>night</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={defaultStyles.container}>
      <FlatList
        renderItem={renderRow}
        ref={listRef}
        data={loading ? [] : listings}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listing: {
    padding: 18,
    // marginVertical: 12,
    gap: 4,
  },
  image: {
    width: "100%",
    height: 330,
    borderRadius: 20,
  },
});

export default Listings;
