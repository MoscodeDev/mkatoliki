import PrayersComponent from '@/src/components/PrayersComponent'
import React from 'react'
import { useTranslation } from 'react-i18next'

const groryBe = () => {
  const {t} = useTranslation()
  return (
    <PrayersComponent header='gloryBeTitle' paragraph='gloryBeText' />
  )
}

export default groryBe