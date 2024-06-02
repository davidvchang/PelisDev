import { useState } from "react"
import NavBar from "./components/NavBar"
import Principal from "./components/Principal"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [search, setSearch] = useState({ text: '', categories: [] });

  return (
    <div className="w-full flex flex-col h-fit bg-Fondo items-center">
      <BrowserRouter>
        <NavBar setSearch={setSearch}/>

        <Routes>
          <Route path='/' element={<Principal search={search}/>}/>
          <Route path='/page/:pageNumber' element={<Principal search={search}/>}/>
        </Routes>
        
      </BrowserRouter>
      
    </div>
  )
}

export default App
