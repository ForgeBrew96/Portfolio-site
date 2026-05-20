import { motion } from "motion/react"
import { useNavigate } from "react-router-dom"
// styles are in index.css
const SharedView = ({ items, setSelectedItem }) => {
    const navigate = useNavigate()

    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ background: "linear-gradient(to right bottom, #b7e4deff, #9ed2cc)" }}
                whileInView={{ opacity: 1 }}
                className="portfolio-grid"
            >
                {items.map((item) => (
                    <motion.a
                        key={item.id}
                        href="#"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`pgrid-${item.id} pgrids`}
                        onClick={(e) => {
                            e.preventDefault()
                            setSelectedItem(item)
                            navigate('/detailview')
                        }}
                    >
                        <span className="pgrid-label">{item.name}</span>
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
};

export default SharedView;
