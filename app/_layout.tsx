// app/_layout.tsx

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

import { User } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
//@ts-ignore
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';

const firebaseConfig = {
  apiKey: "AIzaSyBpzM9ZdYAdXcaJyPZjeGAna_zBe0rkRXs",
  authDomain: "mobiledev1-de8e0.firebaseapp.com",
  projectId: "mobiledev1-de8e0",
  storageBucket: "mobiledev1-de8e0.appspot.com",
  messagingSenderId: "1067636635382",
  appId: "1:1067636635382:web:c9ee0ce5ce7bf65da99ed7"
};

const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Stack>
      {/* Include the tab layout */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* Other screens not in the tab bar */}
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="signup" options={{ title: 'Sign Up' }} />
      <Stack.Screen name="login" options={{ title: 'Login' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />

      {/* Not found screen */}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
