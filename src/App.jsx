import { useState } from "react"
import NavBar from "./components/NavBar"
import Principal from "./components/Principal"

function App() {
  const [search, setSearch] = useState('')

  return (
    <main className="w-full h-fit bg-Fondo">
      <NavBar setSearch={setSearch}/>
      <Principal search={search}/>
    </main>
  )
}

export default App
