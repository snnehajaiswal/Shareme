import React ,{useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Routes , Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './container/Home'
import {getUserDataFromToken } from './utils/Index'
const App = () => {
     const navigate = useNavigate();

  useEffect(() => {
    const userInfo = getUserDataFromToken();
    if (!userInfo) {
      localStorage.clear();
      navigate('/login');
    }
  }, [navigate]);
  return (
          <Routes>
               <Route path='/login'  element={<Login  />}/>
               <Route path='/*' element={<Home />} />

          </Routes>
 
    )
}

export default App
