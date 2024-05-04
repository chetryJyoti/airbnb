import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import ImageView from "react-native-image-viewing";

const fakeimages = [
  {
    id: 1,
    title: "Aenean leo",
    uri: "https://t4.ftcdn.net/jpg/03/70/64/43/360_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg",
  },
  {
    id: 2,
    title: "In turpis",
    uri: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpbGxhfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/454595663.jpg?k=723a647dd2b9ad6cb5fc30069a1914e87d909dbc8dd6ef30ab7741cd739b193e&o=&hp=1",
  },
  {
    id: 4,
    title: "Aenean leo",
    uri: "https://r1imghtlak.mmtcdn.com/d35cf4ba1b2d11eaa0760242ac110002.jpg",
  },
  {
    id: 5,
    title: "In turpis",
    uri: "https://lh3.googleusercontent.com/p/AF1QipPDbkqUDOlajI8_KVq70kQjbQnPNPON0sK3GClQ=w624-h720-n-k",
  },
  {
    id: 6,
    title: "Lorem Ipsum",
    uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/376520756.jpg?k=ba606803f01cb9edcb9a257629373e5275ff7197bf31bc1abd47700aa4484588&o=&hp=1",
  },
];

const WIDTH = Dimensions.get("window").width;

const Images = () => {
  const { imageId } = useLocalSearchParams();

  const [visible, setIsVisible] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const imageViewer = (index: number) => {
    console.log("index", index);
    setIsVisible(true);
    setImgIndex(index);
  };

  return (
    <ScrollView>
      {visible && (
        <ImageView
          images={fakeimages}
          imageIndex={imgIndex}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
        />
      )}

      {fakeimages.map(
        (image, index) =>
          (index + 1) % 3 === 1 && ( // Check if the index is 1, 4, 7, etc.
            <View key={image.id}>
              <TouchableOpacity onPress={() => imageViewer(image.id - 1)}>
                <Image
                  source={{ uri: image.uri }}
                  style={[styles.image, { width: WIDTH, marginVertical: 4 }]}
                />
              </TouchableOpacity>
              <View key={image.id} style={{ flexDirection: "row", gap: 3 }}>
                {/* Render the second image */}
                <TouchableOpacity onPress={() => imageViewer(image.id)}>
                  <Image
                    source={{ uri: fakeimages[index + 1].uri }}
                    style={styles.image}
                  />
                </TouchableOpacity>
                {/* Render the third image */}
                <TouchableOpacity onPress={() => imageViewer(image.id + 1)}>
                  <Image
                    source={{ uri: fakeimages[index + 2].uri }}
                    style={styles.image}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: WIDTH / 2,
    height: WIDTH / 2,
  },
});

export default Images;
