import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './Components/Navbar'
import NewsList from './Components/NewsList'
import { useState } from 'react'
function App() {
const [category,setCategory] = useState('general')
  return (
    <>
    <Navbar setCategory = {setCategory}/>
    <NewsList category = {category}/>
    </>
  )
}

export default App
