import React, { useContext } from 'react'
import { packageContext } from '../../context/packageContext'
import { useTranslation } from 'react-i18next'
import './packageDetails.css'



export default function PackageDetails() {

  const { t } = useTranslation()
  let { packageData, searchTime } = useContext(packageContext);
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false 
  };

  return (
    <div className='packageDetails'>
      <br />
      <br />
      <h2>{t("packageDetailsTilte")} {packageData?.CargoResult[0]?.CargoIdentifierKey1}</h2>
      <br />
      <p>{t("searchTimeTitle")} {searchTime?.toLocaleString('en-US').replace(/AM|PM/, '')}</p>
      <br></br><br />
    </div>
  )
}