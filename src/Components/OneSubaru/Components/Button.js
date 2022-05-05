import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

export default function Button({children, page}){
    return(
        <NavLink to={`/${page}`} style={{
            width: '20%',
            minWidth: 200,
            height: 200,
            borderRadius: 5,
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            textDecoration: 'none',
            marginTop: 20,
            position: 'relative'
        }}>
            <motion.div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 999,
                opacity: 0.2,
                backgroundColor: 'rgba(0,0,0,0)',
                borderRadius: 5
            }}
            whileHover={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>

            </motion.div>
            {children}
        </NavLink>
    )
}