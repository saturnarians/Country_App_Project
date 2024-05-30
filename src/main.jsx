import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeProvider from './context/ThemeContext.jsx'
// import UserProvider from './context/apiContext/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <React.Fragment>
  <ThemeProvider>
    {/* <UserProvider> */}
      <App />
    {/* </UserProvider> */}
  </ThemeProvider> 
  </React.Fragment> 
  </React.StrictMode>,
)