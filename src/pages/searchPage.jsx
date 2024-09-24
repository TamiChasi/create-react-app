import React, { useEffect, useState } from 'react'
import PackageSearch from '../components/packageSearch/packageSearch'
import PackageInfo from '../components/packageInfo/packageInfo'
import { packageContext } from '../context/packageContext'
import LinksArea from '../components/linksArea/linksArea'
import FaqArea from '../components/faqArea/faqArea'
import FaqCard from '../components/faqCard/faqCard'
import ScreenBackgroundIcon from '../icons/screenBackgroundIcone'
import backgroundImage from '../images/background.png'

export default function SearchPage() {

  let [packageData, setPackageData] = useState(null)

  function setContextPackegeData(data) {
    return setPackageData(data);
  }

  useEffect(() => {
    document.body.style.backgroundColor = '#f1f7ff';
  }, []);
   

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundSize: 'cover',  backgroundImage: `url(${backgroundImage})`, height:'100%' }}>

      <packageContext.Provider value={{ packageData, searchTime: new Date() }}>
      <div style={{ position: 'relative', zIndex: 1 }}></div>
      <div className="content-container">
        <PackageSearch setContext={setContextPackegeData}></PackageSearch>
        <br />
        <PackageInfo></PackageInfo>
        <br />
        <FaqArea></FaqArea>
        <br /><br /> 
      </div>
      </packageContext.Provider>
    </div>
  );
}