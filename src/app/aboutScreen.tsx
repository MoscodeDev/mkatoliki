import { Text, View } from "react-native";

export default function aboutScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize:30, color:'red'}}>ABOUT</Text>
    </View>
  );
}
