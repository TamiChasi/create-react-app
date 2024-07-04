import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import { packageContext } from '../../context/packageContext'
import './packageStatus.css'


export default function PackageStatus() {
  let {packageData} = useContext(packageContext);

  const { t } = useTranslation()
  return (
    <div className='packageStatus'>
      <h3>{t("packageStatusTitle")}</h3>
      <h4>{t("packageStatusQuestion")}</h4>

      <Box >
        {packageData.status}
      </Box>

    </div>
  )
}
