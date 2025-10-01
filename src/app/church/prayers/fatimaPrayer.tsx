import PrayersComponent from '@/src/components/PrayersComponent'
import React from 'react'
import { useTranslation } from 'react-i18next'

const fatimaPrayer = () => {
    const {t} = useTranslation()
  return (
    <PrayersComponent header={t('fatimaPrayerTitle')} paragraph={t('fatimaPrayerText')} />
  )
}

export default fatimaPrayer