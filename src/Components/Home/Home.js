import { motion } from "framer-motion"
import Button from "./Components/Button"
const subaru_logo = require('../../Assets/Images/subaru_logo.png')

export default function Home(){

    return(
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: 150,
        }}>
            <Button page='onesubaru'>
                <img src={subaru_logo} style={{
                    width: 100,
                    marginRight: 20
                }}/>
                OneSubaru
            </Button>
            <Button page=''>
                OneToyota <br/> (not functional)
            </Button>
            <Button page=''>
                OneHyundai <br/> (not functional)
            </Button>
        </motion.div>
    )
}