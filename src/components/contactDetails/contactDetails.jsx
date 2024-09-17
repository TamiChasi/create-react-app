import React ,{useContext} from 'react'
import { packageContext } from '../../context/packageContext'
import { useTranslation } from 'react-i18next'
import './contactDetails.css'
import { Link } from '@mui/material'



export default function ContactDetails({ details }) {

  const {t} = useTranslation()
  let {packageData, searchTime} = useContext(packageContext);
  var packageStatus = packageData?.CargoResult[0];


  return (
    <div className='contactDetails'>
      <h3>{t ("caringFactor")}</h3>
      <p>{packageStatus?.contactDetails}</p>
      <p>{packageStatus?.ContactPhoneNumber}</p>
      <p>{t ("orBySite")}</p>
      <p><Link href={packageStatus?.ContactSite}>{packageStatus?.ContactSite}</Link></p>
    </div>
  )
}
