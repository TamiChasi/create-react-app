import React from 'react'
import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import LinksArea from '../components/linksArea/linksArea';

export default function AppLayoutPage() {

  const { t } = useTranslation();

  return (
    <div>
        <Outlet/>
        <LinksArea></ LinksArea>
   
    </div>
  )
}
