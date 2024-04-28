import { View, Text, TouchableOpacity, StyleSheet, Switch } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const PriceCard = () => {
  return (
    <View style={styles.container}>
      <View style={{ gap: 4 }}>
        <Text style={{ fontSize: 16, fontFamily: "mon-semi-bold" }}>
          Display total price
        </Text>
        <Text style={{ fontFamily: "mon", fontSize: 16, color: Colors.grey }}>
          Includes all fees, before taxes
        </Text>
      </View>
      <TouchableOpacity>
        <Switch />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    marginTop: 40,
    padding: 18,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: Colors.grey,
  },
});
export default PriceCard;
