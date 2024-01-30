import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { globalTheme } from './config/index.ts'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider  theme={globalTheme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
