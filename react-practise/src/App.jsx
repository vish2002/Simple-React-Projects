import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Cart from './components/Cart'
import Dashboard from './components/Dashboard'
import RootLayout from './components/RootLayout'


function App() {
  const Router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>
  ))
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <RouterProvider router={Router}/>
    </div>
  )
}

export default App
