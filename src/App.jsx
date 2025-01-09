import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Christian's Portfolio</h1>
      <div className="portfolio-grid">
        <div className="pgrid-1">
          Project 1
        </div>
        <div className="pgrid-2">
          Project 2
        </div>
        <div className="pgrid-3">
          Project 3
        </div>
        <div className="pgrid-4">
          Project 4
        </div>
      </div>
    </>
  )
}

export default App
