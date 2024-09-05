import React, { useState } from 'react'
import PackageSearch from '../components/packageSearch/packageSearch'
import PackageInfo from '../components/packageInfo/packageInfo'
import { packageContext } from '../context/packageContext'
import LinksArea from '../components/linksArea/linksArea'
import FaqArea from '../components/faqArea/faqArea'
import FaqCard from '../components/faqCard/faqCard'
import BackgroundComp from '../components/BackgroundComp/BackgroundComp'

export default function SearchPage() {


  let [packageData, setPackageData] = useState(null)

  function setContextPackegeData(data) {
    return setPackageData(data);
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* <BackgroundComp /> */}
      <packageContext.Provider value={{ packageData, searchTime: new Date() }}>
        <PackageSearch setContext={setContextPackegeData}></PackageSearch>
        <br />
        <PackageInfo></PackageInfo>
        <br />
        <FaqArea></FaqArea>
        <br /><br />
      </packageContext.Provider>
    </div>
  );
}