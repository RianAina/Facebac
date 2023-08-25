import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import React from 'react'
import LoginPage from './LoginPage';
import AutrePage from './AutrePage';

function Router() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                
                <Route path='/LoginPage' element={<LoginPage/>} />
                <Route path='/AutrePage' element={<AutrePage/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router