import PrayersComponent from '@/src/components/PrayersComponent'
import React from 'react'
import { useTranslation } from 'react-i18next'

const hailMary = () => {
  const {t} = useTranslation()
  return (
    <PrayersComponent header='hailMaryTitle' paragraph='hailMaryText' />
  )
}

export default hailMary