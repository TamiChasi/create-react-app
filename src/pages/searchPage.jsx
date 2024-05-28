import React from 'react'
import PackageSearch from '../components/packageSearch'
import PackageInfo from '../components/packageInfo'
import { packageContext } from '../context/packageContext'

export default function SearchPage() {
  return (
    <div>
      <h2>SearchPage</h2>
      <packageContext.Provider>
        <PackageSearch></PackageSearch>
        <PackageInfo></PackageInfo>
      </packageContext.Provider>
    </div>
  )
}