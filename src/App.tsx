import { BrowserRouter, Route, Routes } from "react-router-dom"
import Produtos from "./pages/produtos/Produtos"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/produtos" element={ <Produtos />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
