import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import useBrowserWarmUp from "@/hooks/useBrowserWarmUp";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import DropdownComponent from "@/components/Dropdown";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
//will come from backend
const countryCode = [
  { label: "India (+91)", value: "IN" },
  { label: "United States (+1)", value: "US" },
  { label: "China (+86)", value: "CN" },
  { label: "United Kingdom (+44)", value: "GB" },
  { label: "Russia (+7)", value: "RU" },
  { label: "Germany (+49)", value: "DE" },
  { label: "France (+33)", value: "FR" },
  { label: "Japan (+81)", value: "JP" },
  { label: "Brazil (+55)", value: "BR" },
  { label: "Italy (+39)", value: "IT" },
  { label: "Canada (+1)", value: "CA" },
  { label: "Australia (+61)", value: "AU" },
  { label: "South Korea (+82)", value: "KR" },
  { label: "Spain (+34)", value: "ES" },
  { label: "Mexico (+52)", value: "MX" },
  { label: "Indonesia (+62)", value: "ID" },
  { label: "Netherlands (+31)", value: "NL" },
  { label: "Saudi Arabia (+966)", value: "SA" },
  { label: "Switzerland (+41)", value: "CH" },
  { label: "Argentina (+54)", value: "AR" },
];

const Login = () => {
  useBrowserWarmUp();

  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const isInputEmpty = number === "";

  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleSelectedCountry = (selectedValue: string) => {
    setSelectedCountry(selectedValue);
  };

  const [loginType, setLoginType] = useState("otp");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const toggleLoginType = () => {
    setLoginType(loginType === "otp" ? "email" : "otp");
    console.log(loginType);

    if (loginType === "email") {
      setEmail("");
    } else {
      setNumber("");
      setSelectedCountry("");
    }
  };

  const signUp = () => {
    // setLoading(true);
    const data = {
      selectedCountry,
      number,
      email,
    };

    console.log("signup:", data);

    // setTimeout(() => {
    router.replace({
      pathname: "/(modals)/otp",
      params: {
        number,
      },
    });
    //   setLoading(false);
    // }, 2000);
  };
  const showView = (loginType: string) => {
    return (
      <>
        {loginType === "otp" ? (
          <>
            <View
              style={[
                defaultStyles.inputField,
                {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  borderBottomWidth: 0,
                },
              ]}
            >
              <View style={styles.countryRegionContainer}>
                <Text style={styles.countryRegionLabel}>County/Region</Text>
                <DropdownComponent
                  countryCode={countryCode}
                  onCountrySelected={handleSelectedCountry}
                />
              </View>
            </View>
            <TextInput
              style={[
                defaultStyles.inputField,
                styles.phoneNumberInput,
                {
                  fontSize: isInputEmpty ? 16 : 20,
                },
              ]}
              onChangeText={setNumber}
              value={number}
              placeholder="Phone number"
              keyboardType="numeric"
            />
            <Text
              style={{
                fontFamily: "mon-medium",
                color: Colors.grey,
                fontSize: 12,
                lineHeight: 18,
                marginTop: 10,
                marginBottom: 16,
              }}
            >
              We'll call or text you to confirm your number. Standard messages
              and data rates apply.
            </Text>
          </>
        ) : (
          <TextInput
            style={[
              defaultStyles.inputField,
              { fontSize: 16, marginVertical: 20 },
            ]}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
          />
        )}
      </>
    );
  };

  return (
    <View
      style={[
        defaultStyles.container,
        { paddingHorizontal: 20, paddingVertical: 20 },
      ]}
    >
      {showView(loginType)}
      <TouchableOpacity
        style={[defaultStyles.btn]}
        onPress={() => {
          signUp();
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontFamily: "mon-semi-bold",
          }}
        >
          {loading ? (
            <ActivityIndicator color={"#fff"} size={28} />
          ) : (
            "Continue"
          )}
        </Text>
      </TouchableOpacity>
      <View style={styles.dividerContainer}>
        <View style={defaultStyles.divider} />
        <Text style={{ fontFamily: "mon-light", color: Colors.grey }}>or</Text>
        <View style={defaultStyles.divider} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.btnOutline}
          onPress={() => {
            toggleLoginType();
          }}
        >
          {loginType === "otp" ? (
            <>
              <Ionicons name="mail-outline" size={24} />
              <Text style={{ fontSize: 18, marginLeft: 60 }}>
                Continue with Email
              </Text>
            </>
          ) : (
            <>
              <Ionicons name="call" size={24} />
              <Text style={{ fontSize: 18, marginLeft: 60 }}>
                Continue with Phone
              </Text>
            </>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons name="logo-facebook" size={24} />
          <Text style={{ fontSize: 18, marginLeft: 40 }}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons name="logo-google" size={24} />
          <Text style={{ fontSize: 18, marginLeft: 50 }}>
            Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons name="logo-apple" size={24} />
          <Text style={{ fontSize: 18, marginLeft: 60 }}>
            Continue with Apple
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  countryRegionContainer: {
    flex: 1,
  },
  countryRegionLabel: {
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "mon-light",
    color: Colors.grey,
    marginBottom: 4,
  },
  countryRegionText: {
    fontSize: 16,
    fontFamily: "mon-medium",
  },
  dropdownIconContainer: {
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  phoneNumberInput: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginVertical: 10,
  },
  btnOutline: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
});

export default Login;
