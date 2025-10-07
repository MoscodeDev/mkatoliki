import React from "react";
import { FlatList, Text, View } from "react-native";
import styles from "../styles/styles";

const index = () => {
  const data = [
    { id: "1", name: "Item 1" },
    { id: "2", name: "Item 2" },
    { id: "3", name: "Item 3" },
    { id: "4", name: "Item 4" },
    { id: "5", name: "Item 5" },
    { id: "6", name: "Item 6" },
  ];
  return (

    <View>
      <Text>productScreen</Text>
      <View  
      style={styles.flatListContainer}
      >
        <FlatList 
        data={data}
        numColumns={3}
        keyExtractor={(i) => i.id}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        nestedScrollEnabled={true}
        renderItem={({item})=>(
          <View style={styles.card}>
          <Text>{item.name}</Text>
          </View>
        )} />
      </View>
    </View>
  );
};

export default index;
