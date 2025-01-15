import React from "react"
import { motion } from "motion/react"
import { useNavigate } from "react-router-dom"
import './App.css'

const DetailView = ({ selectedItem, setSelectedItem }) => {
    if (!selectedItem) return null;
    const navigate = useNavigate()

  return (
    <div className="detailContainer">
      <motion.div
        className="detail"
        layoutId={`item-${selectedItem.id}`}
        style={{
          padding: "20px",
          display: "flex",
          width: "100%",
          gap: "1em",
          flexDirection: "column",
          backgroundColor: "lightcoral",
          borderRadius: "5px",
        }}
      >
       <a href={selectedItem.url} target="_blank" rel="noopener noreferrer">{selectedItem.name} 👈 Click To See More! </a>
       {selectedItem.backendurl ? ( <a href={selectedItem.backendurl} target="_blank" rel="noopener noreferrer">Git - Backend Component 👈 Click To See More! </a> ) : null}
       <p>{selectedItem.description}</p>
       <button className='backbtn' onClick={() => navigate('/')} style={{ marginTop: "10px" }}> Back </button>
      </motion.div>
    </div>
  )
}

export default DetailView;
