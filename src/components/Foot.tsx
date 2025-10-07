import { useRouter } from 'expo-router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Foot = () => {
    const router = useRouter()
    const {t} = useTranslation()
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={()=> router.replace('/')}>
        <Text>{t('home')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> router.replace('/products')}>
        <Text>{t('sacramentals')}</Text>
      </TouchableOpacity>
    </View>
  )
}


export default Foot

const styles = StyleSheet.create({
    footer:{
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 15,
        backgroundColor: 'lightgrey'
    }
})