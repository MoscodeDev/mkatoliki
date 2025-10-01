import PrayersComponent from '@/src/components/PrayersComponent'
import React from 'react'
import { useTranslation } from 'react-i18next'

const holyQueen = () => {
    const {t} = useTranslation()
  return (
    <PrayersComponent header={t('holyQueenTitle')} paragraph={t('holyQueenText')} />
  )
}

export default holyQueen