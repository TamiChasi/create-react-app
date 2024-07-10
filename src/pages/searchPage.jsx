import React, { useState } from 'react'
import PackageSearch from '../components/packageSearch/packageSearch'
import PackageInfo from '../components/packageInfo/packageInfo'
import { packageContext } from '../context/packageContext'

export default function SearchPage() {

  let [packageData, setPackageData] = useState(null)

  function setContextPackegeData(data) {
    return setPackageData(data);
  }

  return (
    <div>
      <packageContext.Provider value={{packageData, searchTime: new Date()}}>
        <PackageSearch setContext={setContextPackegeData}></PackageSearch>
        <br></br>
        <PackageInfo></PackageInfo>
      </packageContext.Provider>
    </div>
  )
}