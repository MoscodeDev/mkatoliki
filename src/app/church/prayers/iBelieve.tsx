import PrayersComponent from '@/src/components/PrayersComponent'
import React from 'react'
import { useTranslation } from 'react-i18next'

const iBelieve = () => {
  const {t} = useTranslation()
  return (
    <PrayersComponent header='iBelieveTitle' paragraph='iBelieveText' />
  )
}

export default iBelieve