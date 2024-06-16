import React ,{useContext} from 'react'
import { packageContext } from '../../context/packageContext'
import { useTranslation } from 'react-i18next'


export default function PackageDetails() {

  const {t} = useTranslation()
  let packageData = useContext(packageContext);

  return (
    <div>
      <h3>{t ("packageDetailsTilte")} {packageData.declerationNumber}</h3>
      <p>{t ("declerationNumber")} : {packageData.status}</p>
    </div>
  )
}
