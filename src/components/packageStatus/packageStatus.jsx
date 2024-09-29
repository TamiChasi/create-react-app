import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { Box, Stack, Typography } from '@mui/material';
import { packageContext } from '../../context/packageContext'
import './packageStatus.css'
import { Link } from 'react-router-dom';


export default function PackageStatus() {
  let { packageData } = useContext(packageContext);

  const { t } = useTranslation()
  return (
    <div className='packageStatus'>
      <div className='awaitingMsg'>
        <h3>{t("packageStatusTitle")}</h3>
        <h4>{t("packageStatusQuestion")}</h4>

        <Box className='textBox'>
          {packageData?.status}
          <p className='paragraphStyle'>לא ממתין</p>
        </Box>
        <Stack direction="row" alignItems="center" spacing={1}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10.667L4.66666 7.33366L5.6 6.36699L7.33333 8.10033V2.66699H8.66666V8.10033L10.4 6.36699L11.3333 7.33366L8 10.667ZM4 13.3337C3.63333 13.3337 3.31944 13.2031 3.05833 12.942C2.79722 12.6809 2.66666 12.367 2.66666 12.0003V10.0003H4V12.0003H12V10.0003H13.3333V12.0003C13.3333 12.367 13.2028 12.6809 12.9417 12.942C12.6806 13.2031 12.3667 13.3337 12 13.3337H4Z" fill="#0068F5" />
          </svg>
          <Link
            href="https://www.gov.il/he/service/payment_of_import_taxes"
            target="_blank"
            rel="noopener noreferrer"
            className='linkStyle'
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Typography variant="body1" color="primary">
              דוגמה לקובץ מצורף
            </Typography>
          </Link>
        </Stack>
      </div>
      <div className='confirmationMsg'>
      <h4>{t("packageHasConfirmation")}</h4>
      <Box className='textBox confirmBox'>
          {packageData?.status}
          <p className='paragraphStyle'>לא</p>
        </Box>
      </div>
    </div>
  )
}
