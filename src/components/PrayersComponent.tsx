import React from 'react'
import { useTranslation } from 'react-i18next'
import { ScrollView, Text, View } from 'react-native'
import styles from '../app/styles/styles'

type params ={
    header: string,
    paragraph: string
}

const PrayersComponent = ({header, paragraph}: params) => {
    const {t} = useTranslation()
  return (
    <ScrollView>
    <View style={styles.padding}>
      <Text style={styles.header}>{t(header)}</Text>
      <Text style={styles.paragraph}>{t(paragraph)}</Text>
    </View>
    </ScrollView>
  )
}

export default PrayersComponent