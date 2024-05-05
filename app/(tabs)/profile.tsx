import { View, Text, Button } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";

const Profile = () => {
  const { isSignedIn, signOut } = useAuth();
  return (
    <View>
      <Text>Profile</Text>
      <Button
        title="Log out"
        onPress={() => {
          signOut();
        }}
      />
      {!isSignedIn && <Link href={"/(modals)/login"}>Sign in</Link>}
    </View>
  );
};

export default Profile;
