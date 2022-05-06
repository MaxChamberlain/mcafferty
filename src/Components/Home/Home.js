import { motion } from "framer-motion"
import Button from "./Components/Button"
const subaru_logo = require('../../Assets/Images/subaru_logo.png')
const toyota_logo = require('../../Assets/Images/toyota_logo.png')
const toyota_logo_dark = require('../../Assets/Images/toyota_logo_dark.png')
const subaru_wrx_image = require('../../Assets/Images/subaru_wrx_image.webp')
const toyota_tundra_image = require('../../Assets/Images/toyota_tundra_image.png')
const toyota_rav4_image = require('../../Assets/Images/toyota_rav4_image.png')

export default function Home(){

    return(
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            display: 'flex',
            justifyContent: 'space-around',
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
                    backgroundSize: 1000,
                    backgroundPosition: '0 100%',
                    backgroundRepeat: 'no-repeat',
                    filter: 'blur(2px) brightness(0.8)',
                    transform: 'scale(1)',
                }}
                whileHover={{ filter: 'blur(0) brightness(1)'}}>
                </motion.div>

                <div style={{zIndex: 999, marginTop: 100, height: 200}}>
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
                    backgroundImage: `url(${toyota_tundra_image})`,
                    backgroundSize: 1000,
                    backgroundPosition: '0 90%',
                    backgroundRepeat: 'no-repeat',
                    filter: 'blur(2px) brightness(0.8)',
                    transform: 'scale(1)',
                }}
                whileHover={{ filter: 'blur(0) brightness(1)'}}>
                </motion.div>

                <div style={{zIndex: 999, marginTop: 100, height: 200}}>
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
                    backgroundImage: `url(${toyota_rav4_image})`,
                    backgroundSize: 900,
                    backgroundPosition: '150% 85%',
                    backgroundRepeat: 'no-repeat',
                    filter: 'blur(2px) brightness(0.8)',
                    transform: 'scale(1)',
                }}
                whileHover={{ filter: 'blur(0) brightness(1)'}}>
                </motion.div>

                <div style={{zIndex: 999, marginTop: 100, height: 200}}>
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