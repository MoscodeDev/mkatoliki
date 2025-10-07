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
  fontComment:{
    fontFamily: "monospace",
  },
   header2: {
    fontSize: 18,
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
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  flatListContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 20,
    minHeight: '100%',
  },
  list: {
    justifyContent: 'center',
  },
  row: {
    justifyContent: 'space-between',},
});
export default styles;
