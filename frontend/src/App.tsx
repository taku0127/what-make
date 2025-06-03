import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import axios from 'axios'
import authRepository from './features/auth.repository'
import useCurrentUserStore from './features/current-user.state'
import Signup from './pages/Signup'
import Layout from './Layout'
import Home from './pages/Home'
import problemRepository from './features/problem.repository'
import Detail from './pages/Detail'

function App() {
  const { getLoginUser } = authRepository;
  const newProblems = problemRepository;
  const userStore = useCurrentUserStore();
  useEffect(() => {
    getLoginUser().then((res) => {
      userStore.setUser({name:res.name,email:res.email});
    });
  },[])
  return (
    <div className='bg-[#F8F5F2]'>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Signin />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/problem/:id' element={<Detail />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
