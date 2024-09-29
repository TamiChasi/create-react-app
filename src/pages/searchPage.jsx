import React, { useEffect, useState } from 'react'
import PackageSearch from '../components/packageSearch/packageSearch'
import PackageInfo from '../components/packageInfo/packageInfo'
import { packageContext } from '../context/packageContext'
import LinksArea from '../components/linksArea/linksArea'
import FaqArea from '../components/faqArea/faqArea'
import FaqCard from '../components/faqCard/faqCard'
import ScreenBackgroundIcon from '../icons/screenBackgroundIcone'
import backgroundImage from '../images/background.png'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function SearchPage() {

  const { t } = useTranslation()
  let [packageData, setPackageData] = useState(null)
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const [rerenderTrigger, setRerenderTrigger] = useState(0);

  useEffect(() => {
    setIsSearchVisible(true);
    console.log('isSearchVisible', isSearchVisible)
    console.log('packageData', packageData)

  }, [])

  function setContextPackegeData(data) {
    return setPackageData(data);

  }

  useEffect(() => {
    document.body.style.backgroundColor = '#f1f7ff';
  }, []);
   
  const backToSearch = () => {
    if (!packageData)
      setIsSearchVisible(!isSearchVisible);
    setPackageData(null);
    setRerenderTrigger(prevKey => prevKey + 1);
    console.log('isSearchVisible', isSearchVisible);
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#f1f7ff';
  }, []);
   

  return (
    <div key={rerenderTrigger} style={{ position: 'relative', minHeight: '100vh', backgroundSize: 'cover', backgroundImage: `url(${backgroundImage})`, height: '100%' }}>

      <packageContext.Provider value={{ packageData, searchTime: new Date() }}>
        <div className="content-container">
          {(packageData &&
            <div className='btnContainer'>
              <Button id='backBtn' onClick={backToSearch}>
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 4.29384H9.64875L6.924 1.21618C6.6585 0.916883 6.702 0.471473 7.02 0.222293C7.33875 -0.0275868 7.81125 0.0133532 8.076 0.312643L11.826 4.54795C11.8553 4.58113 11.8702 4.61995 11.892 4.65666C11.91 4.68631 11.9317 4.71172 11.9452 4.74419C11.979 4.82537 11.9993 4.91078 11.9993 4.9969C11.9993 4.99761 12 4.99902 12 4.99972C12 5.00043 11.9993 5.00184 11.9993 5.00254C11.9993 5.08866 11.979 5.17407 11.9452 5.25525C11.9317 5.28772 11.91 5.31313 11.892 5.34278C11.8702 5.37949 11.8553 5.41831 11.826 5.45149L8.076 9.6868C7.9275 9.8541 7.7145 9.94092 7.5 9.94092C7.3305 9.94092 7.16025 9.88727 7.02 9.77715C6.702 9.52797 6.6585 9.08256 6.924 8.78326L9.64875 5.7056H0.75C0.336 5.7056 0 5.38936 0 4.99972C0 4.61007 0.336 4.29384 0.75 4.29384Z" fill="#0068F5" />
                </svg>
                {t('backBtnText')}
              </Button>
            </div>
          )}
          {isSearchVisible &&
            <PackageSearch setContext={setContextPackegeData}></PackageSearch>
          }
          {packageData &&
            <PackageInfo></PackageInfo>
          }

          <br />
          <FaqArea></FaqArea>
          <br /><br />
        </div>
      </packageContext.Provider>
    </div>
  );
}