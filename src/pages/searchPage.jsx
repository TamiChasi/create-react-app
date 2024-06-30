import React, { useState } from 'react'
import PackageSearch from '../components/packageSearch/packageSearch'
import PackageInfo from '../components/packageInfo/packageInfo'
import { packageContext } from '../context/packageContext'

export default function SearchPage() {

  let [packageData, setPackageData] = useState(getPackegeData()) 

  function getPackegeData() {
    var data = require('../data/mockData.json');
    return {...data[0],"contactPhone":"180080080", "contactSite":"www.israelpost.co.il"}
  }

  return (
    <div>
      <h2>SearchPage</h2>
      <packageContext.Provider value={{packageData, searchTime: new Date()}}>
        <PackageSearch></PackageSearch>
        <PackageInfo></PackageInfo>
      </packageContext.Provider>
    </div>
  )
}