import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import styles from '../app/styles/styles'

type textType ={
    lead: string,
    res: string
}

const Responces = ({lead,res}: textType) => {
    const{t} = useTranslation()
  return (
    <View style={styles.flexRow}>
      <Text style={styles.leader}>{t(lead)}</Text>
      <Text style={styles.response}>{t(res)}</Text>
    </View>
  )
}

export default Responces