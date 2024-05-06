import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";

const UserInfo = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const userSignUp = () => {
    setLoader(true);
    const userData = {
      firstName,
      surname,
      dateOfBirth,
      email,
      password,
    };
    setTimeout(() => {
      setLoader(false);
      router.push("/(tabs)/");
    }, 2000);
    console.log("userData:", userData);
  };
  return (
    <ScrollView
      style={[
        defaultStyles.container,
        { paddingHorizontal: 20, marginBottom: 20 },
      ]}
    >
      <Text
        style={{
          paddingVertical: 12,
          fontFamily: "mon-semi-bold",
          fontSize: 24,
        }}
      >
        Add your info
      </Text>
      <TextInput
        style={[
          defaultStyles.inputField,
          {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomWidth: 0,
          },
        ]}
        placeholder="First name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={[
          defaultStyles.inputField,
          {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          },
        ]}
        placeholder="Surname"
        value={surname}
        onChangeText={setSurname}
      />
      <Text
        style={{
          marginVertical: 10,
          color: Colors.grey,
          fontFamily: "mon",
          fontSize: 12,
        }}
      >
        Make sure it matches the name on your government ID.
      </Text>
      <TextInput
        style={[defaultStyles.inputField]}
        placeholder="Date of birth"
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
      />
      <Text
        style={{
          marginVertical: 10,
          color: Colors.grey,
          fontFamily: "mon",
          fontSize: 12,
          lineHeight: 18,
        }}
      >
        To sign up, you need to be at least 18.Other people who use Airbnb won't
        see your date of birth.
      </Text>
      <TextInput
        style={[defaultStyles.inputField]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Text
        style={{
          marginVertical: 10,
          color: Colors.grey,
          fontFamily: "mon",
          fontSize: 12,
        }}
      >
        We'll email you a reservation confirmation
      </Text>
      <TextInput
        style={[defaultStyles.inputField]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Text
        style={{
          fontFamily: "mon-medium",
          fontSize: 14,
          lineHeight: 20,
          marginVertical: 20,
        }}
      >
        By selecting, Agree and continue, I agree to Airbnb's Terms of service,
        Payments Terms of Service and Anti-Descrimination Policy, and
        acknowledge the Privacy Policy.
      </Text>
      <TouchableOpacity
        style={[defaultStyles.btn, { paddingHorizontal: 20 }]}
        onPress={() => {
          userSignUp();
        }}
      >
        {loader ? (
          <ActivityIndicator color={"#fff"} size={28} />
        ) : (
          <Text style={defaultStyles.btnText}>Agree and Continue</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

export default UserInfo;
