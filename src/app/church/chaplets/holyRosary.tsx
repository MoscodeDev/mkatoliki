import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import holyRosaryImg from '../../images/holyRosary.png'
import styles from '../../styles/styles'


const holyRosary = () => {
  return (
    <ImageBackground source={holyRosaryImg} resizeMode='contain' style={{flex: 1,
    width: "100%",
    height: "100%"}}>      
    <View style={styles.containerFlex}>
      <Text style={styles.header}>Holy Rosary</Text>
    </View>
    </ImageBackground>
  )
}

export default holyRosary