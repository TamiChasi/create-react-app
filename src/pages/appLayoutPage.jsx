import React from 'react'
import { Outlet } from 'react-router-dom'
import LinksEria from '../components/linksEria'
import { useTranslation } from 'react-i18next';

export default function AppLayoutPage() {

  const { t } = useTranslation();

  return (
    <div>
      <h1>{ t ("welcome") }</h1>
        <Outlet/>
        <LinksEria></LinksEria>
    </div>
  )
}
