import React ,{useContext} from 'react'
import { packageContext } from '../../context/packageContext'
import { useTranslation } from 'react-i18next'
import './contactDetails.css'
import PackageDetails from '../packageDetails/packageDetails'


export default function ContactDetails({ details }) {

  const {t} = useTranslation()
  let {packageData, searchTime} = useContext(packageContext);





  // return (
  //   <div className='contactDetails'>
  //     <h3>{t("caringFactor")}</h3>
  //     <p>{details.contactDetails}</p>
  //     <p>{details.contactPhone}</p>
  //     <p>{t("orBySite")}</p>
  //     <p>{details.contactSite}</p>
  //   </div>
  // );



  return (
    <div className='contactDetails'>
      <h3>{t ("caringFactor")}</h3>
      <p>{packageData.contactDetails}</p>
      <p>{packageData.contactPhone}</p>
      <p>{t ("orBySite")}</p>
      <p>{packageData.contactSite}</p>
      
    </div>
  )
}
