import NavButton from '@/src/components/NavButton'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import styles from '../../styles/styles'

const index = () => {
  const {t} = useTranslation()
  return (
    <View style={styles.padding}>
        <NavButton text={t('holyRosary')} to='/church/chaplets/holyRosary' />
    </View>
  )
}

export default index