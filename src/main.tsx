/*
 * @Author: shawicx d35f3153@proton.me
 * @Date: 2025-02-13 21:16:35
 * @LastEditors: shawicx d35f3153@proton.me
 * @LastEditTime: 2025-03-01 16:00:40
 * @Description: 
 */
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import './index.css'
import App from './App.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
