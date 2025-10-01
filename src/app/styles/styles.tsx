import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerFlex: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  flexRow:{
    flex:1,
    flexDirection: "row",
    padding:2,
    paddingBottom: 4,
  },
  leader:{
    flex: 1.5 ,
    fontWeight: 'bold',
    paddingRight:3,
  },
  response:{
    flex: 6,
  },
  or:{
    textAlign: 'center',
    flex:1,
    fontWeight: 'bold'
  },
  
  header: {
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    paddingBottom: 10,
  },
  padding: {
    padding: 10,
  },
  paddingTop: {
    paddingTop: 10,
  },
  paragraph: {
    fontSize: 20,
    lineHeight: 30,
  },
  rosaryImage: {
    width: 250,
    height: 350,
    resizeMode: "contain",
    marginTop: 50,
  },
});
export default styles;
