import React from "react"
import { motion } from "motion/react"
import { useNavigate } from "react-router-dom"
import './App.css'

const SharedView = ({ items, selectedItem, setSelectedItem }) => {
    const navigate = useNavigate()

    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ scale: 1.09, background: "linear-gradient(#1a6f9f, #9ed2cc)" }}
                whileInView={{ opacity: 1 }}
                className="portfolio-grid"
            >
                {items.map((item) => (
                    <motion.a
                        key={item.id}
                        href="#"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95, backgroundColor: "rgb(34, 16, 202)" }}
                        className={`pgrid-${item.id} pgrids`}
                        onClick={(e) => {
                            e.preventDefault()
                            setSelectedItem(item)
                            navigate('/detailview')
                        }}
                    >
                        {item.name}
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
};

export default SharedView;
