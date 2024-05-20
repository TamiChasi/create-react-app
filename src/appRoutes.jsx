import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import SearchPage from './pages/searchPage'
import FaqsPages from './pages/faqsPages'
import AppLayoutPage from './pages/appLayoutPage'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayoutPage/>}>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/faqs' element={<FaqsPages/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
