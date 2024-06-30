import React ,{useContext} from 'react'
import { packageContext } from '../../context/packageContext'
import { useTranslation } from 'react-i18next'
import './taxesPayment.css'


export default function TaxesPayment() {

  const {t} = useTranslation()

  return (
    <div className='taxesPayment'>
      <h3>{t ("taxesPaymentTilte")}</h3>
      <button>{t ("payImportTaxes")}</button>
      <button>{t ("apealImportTaxes")}</button>
    </div>
  )
}
