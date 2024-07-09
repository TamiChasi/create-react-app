import React, { useState } from 'react'
import PackageSearch from '../components/packageSearch'
import PackageInfo from '../components/packageInfo/packageInfo'
import { packageContext } from '../context/packageContext'
import LinksArea from '../components/linksArea/linksArea'

export default function SearchPage() {

  let [packageData, setPackageData] = useState(getPackegeData()) 

  function getPackegeData() {
    var data = require('../data/mockData.json');
    return data[0];
  }

  return (
    <div>
      <h2>SearchPage</h2>
      <packageContext.Provider value={packageData}>
        <PackageSearch></PackageSearch>
        <PackageInfo></PackageInfo>
      </packageContext.Provider>
      <LinksArea></LinksArea>
    </div>
  )
}