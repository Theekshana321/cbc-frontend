import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPage from '../Pages/adminPage'
import LoginPage from '../Pages/loginPage'
import './App.css'
import { Toaster } from 'react-hot-toast'

function App() {
  

  return (
   
    <BrowserRouter>
    <Toaster position='top-right'/>
      <Routes path="/*">
      <Route path="/admin/*" element={<AdminPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/home" element={<h1>Home</h1>}/>
      <Route path="/*" element={<h1>404 Not Found</h1>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App
