import React, { useState } from 'react'
import PackageSearch from '../components/packageSearch/packageSearch'
import PackageInfo from '../components/packageInfo/packageInfo'
import { packageContext } from '../context/packageContext'
import LinksArea from '../components/linksArea/linksArea'

export default function SearchPage() {

  let [packageData, setPackageData] = useState(getPackegeData())

  function getPackegeData() {
    var data = require('../data/mockData.json');
    return {...data[0],"contactPhone":"180080080", "contactSite":"https://israelpost.co.il"}
  }

  return (
    <div>
      <packageContext.Provider value={{packageData, searchTime: new Date()}}>
        <PackageSearch></PackageSearch>
        <PackageInfo></PackageInfo>
        <br/><br/>
      </packageContext.Provider>
     
    </div>
  )
}