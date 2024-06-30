import React from 'react'
import PackageDetails from '../packageDetails/packageDetails'
import PackageStatus from '../packageStatus'
import PackageTimeline from '../packageTimeline'
import './packageInfo.css'
import { Container } from '@mui/material'
import TaxesPayment from '../taxesPayment/taxesPayment'
import ContactDetails from '../contactDetails/contactDetails'

export default function PackageInfo() {
  return (
    <Container id='PackageInfo'>
      <PackageDetails></PackageDetails>
      <ContactDetails></ContactDetails>
      <TaxesPayment></TaxesPayment>
      <PackageTimeline></PackageTimeline>
      <PackageStatus></PackageStatus>
    </Container>
  )
}
