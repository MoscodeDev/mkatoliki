import { useRouter } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import NavButton from '../components/NavButton';
import './locales/i18n';
const index = () => {
  const router = useRouter()
  const {t} = useTranslation()
  return (
    <View style={styles.container}>
  
      <NavButton text={t('prayers')} to='/church/prayers' />
      <NavButton text={t('order')} to='/church/order' />
      <NavButton text={t('rosaryChaplet')} to='/church/chaplets' />
      <NavButton text={t('confession')} to='/church/confession' />
    </View> 
  )
}

export default index;

const styles = StyleSheet.create({
  container:{
     flex: 1,
    gap:20,
    padding: 20,
  }
})