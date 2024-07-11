import React from 'react'
import { useTranslation } from 'react-i18next';
import './linksTitle.css'


function LinksTitles() {
    const { t } = useTranslation();

  return (
    <div className='links-title-div'>
        <h2>{t("linksAreaTitle")}</h2>
        <p>{t("linksAreaSunTitle")}</p>
    </div>
  )
}

export default LinksTitles