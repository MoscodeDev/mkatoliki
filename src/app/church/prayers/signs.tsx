import PrayersComponent from '@/src/components/PrayersComponent'
import React from 'react'
import { useTranslation } from 'react-i18next'

const signs = () => {
  const {t} = useTranslation()
  return (
    <PrayersComponent header='signTitle' paragraph='signText' />
  )
}

export default signs