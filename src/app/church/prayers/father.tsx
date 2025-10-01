import PrayersComponent from '@/src/components/PrayersComponent'
import React from 'react'
import { useTranslation } from 'react-i18next'

const father = () => {
  const {t} = useTranslation()
  return (
    <PrayersComponent header='ourFatherTitle' paragraph='ourFatherText' />
  )
}

export default father

