import React ,{useContext} from 'react'
import { packageContext } from '../../context/packageContext'
import { useTranslation } from 'react-i18next'
import './taxesPayment.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function TaxesPayment() {

  const {t} = useTranslation()

  return (
    <div className='taxesPayment'>
      <h3>{t ("taxesPaymentTilte")}</h3>
      <Stack spacing={5} direction="row">
      <Button variant="contained" margin={'5px'} >{t ("payImportTaxes")}</Button>
      <Button variant="outlined">{t ("apealImportTaxes")}</Button>
    </Stack>
    
    </div>
  )
}
