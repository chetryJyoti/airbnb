import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";

const Wishlists = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 52 }}>
      <View style={[defaultStyles.container, { padding: 18 }]}>
        <Text style={styles.headerText}>Wishlists</Text>
        <Text
          style={{
            marginTop: 40,
            fontSize: 20,
            fontWeight: "400",
            fontFamily: "mon-semi-bold",
          }}
        >
          Login in to view your Wishlists
        </Text>
        <Text
          style={{
            marginVertical: 14,
            fontFamily: "mon",
            color: Colors.grey,
          }}
        >
          You can create, view, or edit Wishlists once you've logged in.
        </Text>
        <TouchableOpacity
          style={[defaultStyles.btn, { width: 100 }]}
          onPress={() => router.push("/(modals)/login")}
        >
          <Text style={defaultStyles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerText: {
    fontSize: 34,
    fontWeight: "600",
    fontFamily: "mon-bold",
  },
});

export default Wishlists;
