import React from 'react'
import PackageDetails from './packageDetails'
import PackageStatus from './packageStatus'
import PackageTimeline from './packageTimeline'

export default function PackageInfo() {
  return (
    <div>PackageInfo
    <PackageDetails></PackageDetails>
    <PackageTimeline></PackageTimeline>
    <PackageStatus></PackageStatus>
    </div>
  )
}
