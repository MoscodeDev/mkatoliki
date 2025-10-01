import { Slot } from "expo-router";
import { ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Foot from "../components/Foot";
import Head from "../components/Head";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Head />
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Slot />
        </ScrollView>
        <Foot />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
