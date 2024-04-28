import React, { useRef, useState } from "react";
import { View, StyleSheet, Dimensions, Platform } from "react-native";
import Carousel, {
  Pagination,
  ParallaxImage,
} from "react-native-snap-carousel";

const SLIDER_WIDTH = Dimensions.get("window").width;

const CarouselCardItem = ({ itemData }) => {
  const isCarousel = useRef(null);

  const [index, setIndex] = useState(0);

  const CarouselCardItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item} key={index}>
        <ParallaxImage
          source={{ uri: item.imgUrl }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.6}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <View>
      <Carousel
        layoutCardOffset={9}
        ref={isCarousel}
        data={itemData}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        sliderHeight={SLIDER_WIDTH - 60}
        itemWidth={SLIDER_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        onSnapToItem={(index) => setIndex(index)}
        autoplay={true}
        autoplayInterval={6000}
        loop
        hasParallaxImages={true}
      />
      <View style={{ marginTop: -50 }}>
        <Pagination
          dotsLength={itemData.length}
          activeDotIndex={index}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: "#fff",
            opacity: 1,
          }}
          inactiveDotOpacity={0.8}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: SLIDER_WIDTH - 35,
    height: SLIDER_WIDTH - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 12,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
});

export default CarouselCardItem;
