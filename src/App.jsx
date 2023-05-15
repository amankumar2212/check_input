import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Input from './Input'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Input />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App