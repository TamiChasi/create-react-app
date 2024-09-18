import React, { useContext } from 'react'
import { packageContext } from '../../context/packageContext'
import { useTranslation } from 'react-i18next'
import './contactDetails.css'
import { Link } from '@mui/material'



export default function ContactDetails({ details }) {

  const { t } = useTranslation()
  let { packageData, searchTime } = useContext(packageContext);
  var packageStatus = packageData?.CargoResult[0];


  return (
    <div className='contactDetails'>
      <h3>{t("caringFactor")}</h3><br />
      <p>{packageStatus?.contactDetails}</p>
      <p>{t("israelPost")} {packageStatus?.ContactPhoneNumber}</p>
      <p>{t("orBySite")} <a href={packageStatus?.ContactSite} target="_blank" style={{ color: '#0068F5' }}>
      israelpost.co.il</a></p>
      
    </div>
  )
}
