import { useState } from 'react'
import axios from "axios"
import { BrowserRouter, Routes, Route, Link } from
  'react-router-dom'
import Books from "./Components/Books"
import Bookform from "./Components/Bookform"

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1>This is main app</h1>
      <hr />
      <BrowserRouter>
        <Link to="/books">All Books</Link>
        <Link to="/bookForm">Create Book</Link>
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/bookForm" element={<Bookform/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App

