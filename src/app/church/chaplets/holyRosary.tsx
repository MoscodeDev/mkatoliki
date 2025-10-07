import RosaryMystery from '@/src/components/RosaryMystery'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Image, ScrollView, Text, View } from 'react-native'
import holyRosar from '../../images/holyRosary.webp'
import styles from '../../styles/styles'


const holyRosary = () => {
  const {t} = useTranslation()
  return (
    <ScrollView style={styles.padding}>
      <Text style={styles.header}>Holy Rosary</Text>
    <Image source={holyRosar} resizeMode='contain' style={{flex: 1,
    width: "100%",
    height: 250}} />      
    <RosaryMystery type='joyful' />
    <RosaryMystery type='light' />
    <RosaryMystery type='sorrowful' />
    <RosaryMystery type='glorious' />
    <View style={{marginTop: 30}}></View>
    
    </ScrollView>
  )
}

export default holyRosary