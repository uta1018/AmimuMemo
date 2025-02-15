import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../features/login/Login'
import Home from '../features/home/Home'
import Project from '../features/project/Project'
import EditProject from '../features/editProject/EditProject'
import CreateProject from '../features/createProject/CreateProject'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/project/:projectId' element={<Project />} />
        <Route path='/edit-project/:projectId' element={<EditProject />} />
        <Route path='/create-project' element={<CreateProject/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
