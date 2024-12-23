import React, { useContext } from 'react'
import PackageStatus from '../packageStatus/packageStatus'
import PackageTimeline from '../packageTimeline/packageTimeline'
import './packageInfo.css'
import { Container, Stack } from '@mui/material'
import TaxesPayment from '../taxesPayment/taxesPayment'
import ContactDetails from '../contactDetails/contactDetails'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { packageContext } from '../../context/packageContext'

export default function PackageInfo() {

  const { packageData } = useContext(packageContext);


  return (
    <div className='packageInfo' style={{ display: packageData ? 'block' : 'none' }}>
      <Container className='packageInfoContainer'>
        <Box>
          <Stack
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            alignItems="center"
          >
            <ContactDetails />
            <TaxesPayment />
          </Stack>
        </Box>
        <br />
      </Container>

      <br />
      <Container className='packageInfoContainer'>
        <Box className='packageInfoBox' style={{ marginBottom: '20px' }}>
          <PackageTimeline packageData={packageData}></PackageTimeline>
          <Divider orientation="vertical" variant="middle" flexItem sx={{ border: 1, margin: 0 }} className='verticalDevider'/>
          <PackageStatus></PackageStatus>
        </Box>
      </Container>
    </div>
  )
}
