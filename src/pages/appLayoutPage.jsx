import React from 'react'
import { Outlet } from 'react-router-dom'
import LinksEria from '../components/linksEria'

export default function AppLayoutPage() {
  return (
    <div>
        <Outlet/>
        <LinksEria></LinksEria>
    </div>
  )
}
