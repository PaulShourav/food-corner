/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, useLoaderData } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider, { AuthContext } from './providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
