import { useState } from "react"
import { motion, useTime, useTransform } from "motion/react"
import { Routes, Route } from 'react-router-dom'
import './App.css'
import SharedView from "./SharedView"
import DetailView from "./DetailView"

const items = [
  { id: 1, name: "Dimension Versus Battler TCG", description: "The goal for this project was to make an API call using one of the provided list of API's. To accomplish the goal of this project I created a series of API calls that would use the response data to create cards for a simple number comparison game for two players.", url: "https://dimension-vs-battlertcg.surge.sh" },
  { id: 2, name: "Git - Nature's Labrynth Escape Room", description: "The goal for this project was to make our own Mongo Data Base and connect a frontend that can successfully make calls to our personal API. To accomplish the goal of this project I created a Data Base that houses a Virtual Escape Room's puzzles, rooms, group accounts, hints, answer key and more. All this was displayed and utilized on the front end with a virtual escape room themed after the terrifying real life tragedy of Gollum's Cave ", url: "https://github.com/ForgeBrew96/NaturesLabyrinthsEscapeRoom.git" },
  { id: 3, name: "Git - Sprout Society", description: "The goal for this project was to work with a team to make a React App with an attached Mongo Data Base. My team worked together to create a Social Connecting app, that facilitates users in better understanding themselves and than gives them ways to get involved in their community and learn more about themselves.", url: "https://github.com/ForgeBrew96/self-learner-app-front-end.git", backendurl: "https://github.com/ForgeBrew96/self-learner-app-backend.git" },
  { id: 4, name: "Protocol Center", description: "The goal for this project was to create a full stack MVP that uses React for the frontend and PSQL for the backend. I accomplished this MVP by creating a Database for the small box card game, Compile. A user is able to view the original cards in the game, as well as create, collect, delete and update their own cards for the game that are only accessible through their account. The site also has other pages for buying the game, learning the rules and a player feed.", url: "https://protocolcenter.netlify.app/" }
]

function App() {
  const [selectedItem, setSelectedItem] = useState(null)

  const time = useTime()
  const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false })

  return (
    <div className="HeadContainer">
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
      >
        Christian Mendoza's Portfolio
      </motion.h1>
      <Routes>
        <Route path="/" element={<SharedView items={items} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />} />
        <Route path="/sharedview" element={<SharedView items={items} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />} />
        <Route path="/detailview" element={<DetailView selectedItem={selectedItem} setSelectedItem={setSelectedItem} />} />
      </Routes>
    </div>
  );
}

export default App;
