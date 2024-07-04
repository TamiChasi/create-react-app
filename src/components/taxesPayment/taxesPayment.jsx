import React ,{useContext} from 'react'
import { packageContext } from '../../context/packageContext'
import { useTranslation } from 'react-i18next'
import './taxesPayment.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

export default function TaxesPayment() {

  const {t} = useTranslation()

  const redirectToTaxesPayment = () =>{
    window.location.href = 'https://www.gov.il/he/service/payment_of_import_taxes';
  }

  const redirectToApealImportTaxes = () =>{
    window.location.href = 'https://www.gov.il/he/service/return-on-personal-import-taxes';
  }

  return (
    <div className='taxesPayment'>
      <h3>{t ("taxesPaymentTilte")}</h3>
      <Stack spacing={5} direction="row">
      <Button component={Link} variant="contained" margin={'5px'} onClick={redirectToTaxesPayment}>{t ("payImportTaxes")}</Button>
      <Button component={Link} variant="outlined" onClick={redirectToApealImportTaxes}>{t ("apealImportTaxes")}</Button>
    </Stack>
    
    </div>
  )
}
