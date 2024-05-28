import React from 'react'
import { useTranslation } from 'react-i18next'

export default function PackageStatus() {
  const {t} = useTranslation()
  return (
    <div>
      <h1>{ t ("test") }</h1>
    </div>
  )
}
