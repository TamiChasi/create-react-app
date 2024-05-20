import React from 'react'
import PackageSearch from '../components/packageSearch'
import PackageInfo from '../components/packageInfo'

export default function SearchPage() {
  return (
    <div>
      <h2>SearchPage</h2>
      <PackageSearch></PackageSearch>
      <PackageInfo></PackageInfo>
    </div>
  )
}