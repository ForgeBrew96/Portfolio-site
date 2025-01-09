import { motion, useTime, useTransform } from "motion/react"
import './App.css'

function App() {

  const time = useTime();
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });

  return (
    <>
      <div className="special-box">
        <motion.div style={{ rotate }} />
      </div>
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.7, bounce: 0.4 },
        }}
        className="title"
      >Christian Mendoza's Portfolio</motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ scale: 1.09, background: "linear-gradient(#1a6f9f, #9ed2cc)" }}
        whileInView={{ opacity: 1 }}
        className="portfolio-grid">

        <motion.a 
         href="https://www.w3schools.com" target="_blank"
        initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95, backgroundColor: "rgb(34, 16, 202)" }}
          className="pgrid-1 pgrids">
          Project 1
        </motion.a>

        <motion.a
         href="https://www.w3schools.com" target="_blank"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95, backgroundColor: "rgb(34, 16, 202)" }}
          onHoverStart={() => console.log('hover started!')}
          className="pgrid-2 pgrids">
          Project 2
        </motion.a>

        <motion.a
         href="https://www.w3schools.com" target="_blank"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95, backgroundColor: "rgb(34, 16, 202)" }}
          onHoverStart={() => console.log('hover started!')}
          className="pgrid-3 pgrids">
          Project 3
        </motion.a>

        <motion.a
         href="https://www.w3schools.com" target="_blank"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95, backgroundColor: "rgb(34, 16, 202)" }}
          onHoverStart={() => console.log('hover started!')}
          className="pgrid-4 pgrids">
          Project 4
        </motion.a>

      </motion.div>
    </>
  )
}

export default App
