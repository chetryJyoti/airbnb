import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "mon-bold": require("../assets/fonts/Montserrat/Montserrat-Bold.ttf"),
    "mon-light": require("../assets/fonts/Montserrat/Montserrat-Light.ttf"),
    "mon-medium": require("../assets/fonts/Montserrat/Montserrat-Medium.ttf"),
    mon: require("../assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    "mon-semi-bold": require("../assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <GestureHandlerRootView>
    <RootLayoutNav />
    // </GestureHandlerRootView>
  );
}

function RootLayoutNav() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)/login"
        options={{
          title: "Log in or sign up to Airbnb",
          headerTitleStyle: {
            fontFamily: "mon-semi-bold",
          },
          presentation: "modal",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="listing/[id]"
        options={{ headerTitle: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="(modals)/booking"
        options={{
          presentation: "transparentModal",
          animation: "fade",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-outline" size={24} />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="(modals)/images"
        options={{
          headerTitle: "",
          presentation: "card",
          animation: "fade",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
