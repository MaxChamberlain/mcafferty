import { motion } from "framer-motion"
import Button from "./Components/Button"
const subaru_logo = require('../../Assets/Images/subaru_logo.png')
const toyota_logo = require('../../Assets/Images/toyota_logo.png')
const toyota_logo_dark = require('../../Assets/Images/toyota_logo_dark.png')

export default function Home(){

    return(
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        style={{
            position: 'absolute',
            top: 80,
            left: 0,
            right: 0,
            bottom: '25vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: 150,
            alignItems: 'center',
        }}>
            <Button page='onesubaru'>
                <img src={subaru_logo} style={{
                    width: 100,
                    marginRight: 20
                }}/>
                One Subaru
            </Button>
            <Button page=''>
                <img src={toyota_logo} style={{
                    width: 100,
                    marginRight: 20
                }}/>
                One Toyota
            </Button>
            <Button page=''>
                <img src={toyota_logo_dark} style={{
                    width: 100,
                    marginRight: 20,
                }}/>
                Avondale Toyota
            </Button>
        </motion.div>
    )
}