import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import { Link } from "expo-router";
import { Listing } from "@/interfaces/listing";
import { Ionicons } from "@expo/vector-icons";
import CarouselCardItem from "./CarouselCard";
import PriceCard from "./PriceCard";
interface Props {
  listings: any[];
  category: string;
}

const data = [
  {
    title: "Aenean leo",
    body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    imgUrl:
      "https://t4.ftcdn.net/jpg/03/70/64/43/360_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg",
  },
  {
    title: "In turpis",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    imgUrl:
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpbGxhfGVufDB8fDB8fHww",
  },
  {
    title: "Lorem Ipsum",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    imgUrl:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/454595663.jpg?k=723a647dd2b9ad6cb5fc30069a1914e87d909dbc8dd6ef30ab7741cd739b193e&o=&hp=1",
  },
];

const Listings = ({ listings, category }: Props) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 400);
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
          <CarouselCardItem itemData={data} />
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
              }}
            >
              <Ionicons name="star" size={14} />
              <Text>{item.review_scores_rating}</Text>
            </View>
          </View>
          <Text style={{ fontFamily: "mon" }}>{item.room_type}</Text>
          <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
            <Text style={{ fontFamily: "mon-bold", fontSize: 16 }}>
              ₹ {item.price}
            </Text>
            <Text style={{ fontFamily: "mon" }}>night</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={defaultStyles.container}>
      {/* <PriceCard /> */}
      <FlatList
        renderItem={renderRow}
        ref={listRef}
        data={loading ? [] : listings}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listing: {
    padding: 18,
    gap: 4,
    // marginTop: 18
  },
  image: {
    width: "100%",
    height: 330,
    borderRadius: 20,
  },
});

export default Listings;
