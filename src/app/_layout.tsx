import { Slot } from "expo-router";
import { useWindowDimensions, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Foot from "../components/Foot";
import Head from "../components/Head";

export default function RootLayout() {
  const { height, width, scale } = useWindowDimensions();

  const headHeight = height * 0.07;
  const footHeight = height * 0.1;
  const bodyHeight = height * 0.83;
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>

        <View style={{ height: headHeight }}>
          <Head />
        </View>

        <View style={{ height: bodyHeight }}>
          <Slot />
        </View>

        <View style={{ height: footHeight }}>
          <Foot />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
