import React, { useContext } from 'react'
import { packageContext } from '../../context/packageContext'
import { useTranslation } from 'react-i18next'
import './contactDetails.css'



export default function ContactDetails() {

  const { t } = useTranslation()
  let { packageData, searchTime } = useContext(packageContext);
  var packageDetails = packageData?.CargoResult[0];


  return (
    <div className='contactDetails'>
      <h3>{t("caringFactor")}</h3><br />
      <p>{packageDetails?.contactDetails}</p>
      <p>{packageDetails?.ContactDetails} {packageDetails?.ContactPhoneNumber}</p>
      <p>{t("orBySite")} <a href={packageDetails?.ContactSite} target="_blank" style={{ color: '#0068F5' }}>
        {packageDetails?.ContactSite}</a></p>

    </div>
  )
}
