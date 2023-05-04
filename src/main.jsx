/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, useLoaderData } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider, { AuthContext } from './providers/AuthProvider'
// import DataLoadProvider from './providers/DataLoadProvider'

ReactDOM.createRoot(document.getElementById('root')).render(

  // <DataLoadProvider>
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>

  // </DataLoadProvider>

)
