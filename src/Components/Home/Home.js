import { motion } from "framer-motion"
import Button from "./Components/Button"
const subaru_logo = require('../../Assets/Images/subaru_logo.png')
const toyota_logo = require('../../Assets/Images/toyota_logo.png')
const toyota_logo_dark = require('../../Assets/Images/toyota_logo_dark.png')
const subaru_wrx_image = require('../../Assets/Images/subaru_wrx_image.jpg')
const toyota_tundra_image = require('../../Assets/Images/toyota_tundra_image.webp')
const toyota_highlander_image = require('../../Assets/Images/toyota_highlander_image.jpg')

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
                <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${subaru_wrx_image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '-400px 0',
                    filter: 'blur(3px) brightness(0.8)',
                    opacity: 0.7,
                    transform: 'scale(1)',
                }}
                whileHover={{ filter: 'blur(2px) brightness(0.9)', opacity: 0.8}}>
                </motion.div>

                <div style={{zIndex: 999}}>
                    <img src={subaru_logo} style={{
                        width: 100,
                        marginRight: 20
                    }}/>
                    One Subaru
                </div>
            </Button>
            <Button page='onetoyota'>
                <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${toyota_highlander_image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '-400px 0',
                    filter: 'blur(3px) brightness(0.8)',
                    opacity: 0.7,
                    transform: 'scale(1)',
                }}
                whileHover={{ filter: 'blur(2px) brightness(0.9)', opacity: 0.8}}>
                </motion.div>

                <div style={{zIndex: 999}}>
                    <img src={toyota_logo} style={{
                        width: 100,
                        marginRight: 20
                    }}/>
                    One Toyota
                </div>
            </Button>
            <Button page='avondaletoyota'>
                <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${toyota_tundra_image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '-400px -20px',
                    filter: 'blur(3px) brightness(0.8)',
                    opacity: 0.7,
                    transform: 'scale(1)',
                }}
                whileHover={{ filter: 'blur(2px) brightness(0.9)', opacity: 0.8 }}>
                </motion.div>

                <div style={{zIndex: 999}}>
                    <img src={toyota_logo_dark} style={{
                        width: 100,
                        marginRight: 20
                    }}/>
                    Avondale Toyota
                </div>
            </Button>
        </motion.div>
    )
}