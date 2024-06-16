import React from 'react'
import PackageDetails from '../packageDetails/packageDetails'
import PackageStatus from '../packageStatus'
import PackageTimeline from '../packageTimeline'
import './packageInfo.css'
import { Container } from '@mui/material'

export default function PackageInfo() {
  return (
    <Container id='PackageInfo'>
    <PackageDetails></PackageDetails>
    <PackageTimeline></PackageTimeline>
    <PackageStatus></PackageStatus>
    </Container>
  )
}
