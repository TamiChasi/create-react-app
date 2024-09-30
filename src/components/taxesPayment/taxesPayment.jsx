import React, { useContext } from 'react'
import { packageContext } from '../../context/packageContext'
import { useTranslation } from 'react-i18next'
import './taxesPayment.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Divider, Link, Typography } from '@mui/material';

export default function TaxesPayment() {

  const { t } = useTranslation()

  const redirectToTaxesPayment = () => {
    window.location.href = 'https://www.gov.il/he/service/payment_of_import_taxes';
  }

  let taxesAmount = 50;
  let paidTaxesAmount = 50;

  return (
    <div className='taxContainer'>
      {taxesAmount === 0 ? null : (
        <>
          <Divider orientation="horizontal" variant="middle" flexItem sx={{ border: 1, margin: 0 }} />
          {taxesAmount === paidTaxesAmount ? (
            <div className='taxesPayment'>
              <h3>{t("taxesPaidTilte", { taxesAmount })}</h3>
              <Stack>
                <Button className='btnStyle' component={Link} variant="contained" margin={'5px'} onClick={redirectToTaxesPayment}>{t("payImportTaxes")}</Button>
                <Link
                  href="https://www.gov.il/he/service/payment_of_import_taxes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='linkStyle'
                  underline='none'
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <Typography variant="body1" color="primary">
                    {t("paymentConfirmation")}
                  </Typography>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.25 7.49993H4.35125L7.076 4.22993C7.3415 3.91193 7.298 3.43868 6.98 3.17393C6.66125 2.90843 6.18875 2.95193 5.924 3.26993L2.174 7.76993C2.14475 7.80518 2.12975 7.84643 2.108 7.88543C2.09 7.91693 2.06825 7.94393 2.05475 7.97843C2.021 8.06468 2.00075 8.15543 2.00075 8.24693C2.00075 8.24768 2 8.24918 2 8.24993C2 8.25068 2.00075 8.25218 2.00075 8.25293C2.00075 8.34443 2.021 8.43518 2.05475 8.52143C2.06825 8.55593 2.09 8.58293 2.108 8.61443C2.12975 8.65343 2.14475 8.69468 2.174 8.72993L5.924 13.2299C6.0725 13.4077 6.2855 13.4999 6.5 13.4999C6.6695 13.4999 6.83975 13.4429 6.98 13.3259C7.298 13.0612 7.3415 12.5879 7.076 12.2699L4.35125 8.99993H13.25C13.664 8.99993 14 8.66393 14 8.24993C14 7.83593 13.664 7.49993 13.25 7.49993Z" fill="#0068F5" />
                  </svg>
                </Link>
              </Stack>

            </div>
          ) : (
            <div className='taxesPayment'>
              <h3>{t("taxesPaymentTilte")}</h3>
              <Stack>
                <Button className='btnStyle' component={Link} variant="contained" margin={'5px'} onClick={redirectToTaxesPayment}>{t("payImportTaxes")}</Button>
                <Link
                  href="https://www.gov.il/he/service/payment_of_import_taxes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='linkStyle'
                  underline='none'
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <Typography variant="body1" color="primary">
                    {t("appeal")}
                  </Typography>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.25 7.49993H4.35125L7.076 4.22993C7.3415 3.91193 7.298 3.43868 6.98 3.17393C6.66125 2.90843 6.18875 2.95193 5.924 3.26993L2.174 7.76993C2.14475 7.80518 2.12975 7.84643 2.108 7.88543C2.09 7.91693 2.06825 7.94393 2.05475 7.97843C2.021 8.06468 2.00075 8.15543 2.00075 8.24693C2.00075 8.24768 2 8.24918 2 8.24993C2 8.25068 2.00075 8.25218 2.00075 8.25293C2.00075 8.34443 2.021 8.43518 2.05475 8.52143C2.06825 8.55593 2.09 8.58293 2.108 8.61443C2.12975 8.65343 2.14475 8.69468 2.174 8.72993L5.924 13.2299C6.0725 13.4077 6.2855 13.4999 6.5 13.4999C6.6695 13.4999 6.83975 13.4429 6.98 13.3259C7.298 13.0612 7.3415 12.5879 7.076 12.2699L4.35125 8.99993H13.25C13.664 8.99993 14 8.66393 14 8.24993C14 7.83593 13.664 7.49993 13.25 7.49993Z" fill="#0068F5" />
                  </svg>
                </Link>
              </Stack>

            </div>
          )}
        </>
      )
      }
    </div >
  )
}
