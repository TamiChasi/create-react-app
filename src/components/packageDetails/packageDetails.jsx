import React ,{useContext} from 'react'
import { packageContext } from '../../context/packageContext'
import { useTranslation } from 'react-i18next'
import './packageDetails.css'


export default function PackageDetails() {

  const {t} = useTranslation()
  let {packageData, searchTime} = useContext(packageContext);

  return (
    <div className='packageDetails'>
      <h2>{t ("packageDetailsTilte")} {packageData.declerationNumber}</h2>
      <p>{t ("searchTimeTitle")} {searchTime.toLocaleString()} </p>
      <br></br>
    </div>
  )
}
