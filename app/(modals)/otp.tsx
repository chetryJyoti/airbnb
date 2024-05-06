import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import { useLocalSearchParams, useRouter } from "expo-router";
import OtpTextInput from "react-native-text-input-otp";
import Animated, { SlideInDown } from "react-native-reanimated";
const Otp = () => {
  const { number } = useLocalSearchParams();

  const [otp, setOtp] = useState("");
  const router = useRouter();
  const addUserInfo = () => {
    router.push("/(modals)/userInfo");
  };

  return (
    <View
      style={[
        defaultStyles.container,
        { paddingHorizontal: 20, paddingVertical: 20 },
      ]}
    >
      <Text style={{ fontSize: 16, fontFamily: "mon" }}>
        Enter the code we've send by SMS to {number}:
      </Text>

      <View style={{ marginVertical: 30 }}>
        <OtpTextInput
          otp={otp}
          setOtp={setOtp}
          digits={6}
          style={{
            borderRadius: 0,
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
            height: 45,
          }}
          fontStyle={{ fontSize: 20, fontWeight: "bold" }}
          focusedStyle={{ borderColor: "#000", borderBottomWidth: 2 }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          //   justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 16, fontFamily: "mon" }}>
          Haven't received a code?{" "}
        </Text>
        <TouchableOpacity style={{ borderBottomWidth: 1 }}>
          <Text
            style={{
              fontFamily: "mon-semi-bold",
              fontSize: 16,
            }}
          >
            Send again
          </Text>
        </TouchableOpacity>
      </View>
      <Animated.View
        style={defaultStyles.footer}
        entering={SlideInDown.delay(200)}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Text style={{ fontFamily: "mon-semi-bold", fontSize: 18 }}></Text>
          </View>
          <TouchableOpacity
            style={[defaultStyles.btn, { paddingHorizontal: 20 }]}
            onPress={() => {
              addUserInfo();
            }}
          >
            <Text style={defaultStyles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({});

export default Otp;
