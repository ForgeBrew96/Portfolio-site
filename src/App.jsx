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
           scale: { type: "spring", visualDuration: 0.7, bounce: 0.3 },
       }}
       className="title"
      >Christian's Portfolio</motion.h1>
      <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ backgroundColor: "rgb(68, 130, 146)" }}
        whileInView={{ opacity: 1 }}
      className="portfolio-grid">
        <motion.div initial={{scale: 1}}
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.95, backgroundColor: "rgb(73, 73, 73)" }}
         onHoverStart={() => console.log('hover started!')}
         className="pgrid-1 pgrids">
          Project 1
        </motion.div>
        <motion.div
        initial={{scale: 1}}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95, backgroundColor: "rgb(73, 73, 73)" }}
        onHoverStart={() => console.log('hover started!')} 
        className="pgrid-2 pgrids">
          Project 2
        </motion.div>
        <motion.div 
        initial={{scale: 1}}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95, backgroundColor: "rgb(73, 73, 73)" }}
        onHoverStart={() => console.log('hover started!')}
        className="pgrid-3 pgrids">
          Project 3
        </motion.div>
        <motion.div 
        initial={{scale: 1}}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95, backgroundColor: "rgb(73, 73, 73)" }}
        onHoverStart={() => console.log('hover started!')}
        className="pgrid-4 pgrids">
          Project 4
        </motion.div>
      </motion.div>
    </>
  )
}

export default App
