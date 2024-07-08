import React, { useContext } from 'react'
import PackageDetails from '../packageDetails/packageDetails'
import PackageStatus from '../packageStatus/packageStatus'
import PackageTimeline from '../packageTimeline/packageTimeline'
import './packageInfo.css'
import { Container } from '@mui/material'
import TaxesPayment from '../taxesPayment/taxesPayment'
import ContactDetails from '../contactDetails/contactDetails'
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { packageContext } from '../../context/packageContext'

export default function PackageInfo() {

  const { packageData } = useContext(packageContext);


  return (
    <Container className='packageInfo'  style={{ display: packageData ? 'block' : 'none' }}>

      <PackageDetails></PackageDetails>
      <Box>
        <ContactDetails></ContactDetails>
        <Divider orientation="vertical" variant="middle" flexItem />
        <TaxesPayment></TaxesPayment>
      </Box>
      <br />
      <Divider component="div" />
      <br />
      <Box>
        <PackageTimeline></PackageTimeline>
        <Divider orientation="vertical" variant="middle" flexItem />
        <PackageStatus></PackageStatus>
      </Box>
    </Container>
  )
}
