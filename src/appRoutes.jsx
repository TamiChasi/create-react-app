import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import SearchPage from './pages/searchPage'
import FaqsPage from './pages/faqsPage'
import AppLayoutPage from './pages/appLayoutPage'


export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayoutPage/>}>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/faqs' element={<FaqsPage/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
