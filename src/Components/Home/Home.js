import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import Button from "./Components/Button"
import './Components/stylesheet.css'
const subaru_logo = require('../../Assets/Images/subaru_logo.png')
const toyota_logo = require('../../Assets/Images/toyota_logo.png')
const toyota_logo_dark = require('../../Assets/Images/toyota_logo_dark.png')
const wrx_image = require('../../Assets/Images/wrx_image.jpg')
const tundra_image = require('../../Assets/Images/tundra_image.webp')
const highlander_image = require('../../Assets/Images/highlander_image.jpg')

export default function Home(){

    return(
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        style={{
            position: 'absolute',
            top: 85,
            left: 0,
            right: 0,
            bottom: 0,
        }}>
        <NavLink to={`/oneauto`} style={{
            width: '100vw',
            height: 200,
            borderRadius: 5,
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            color: 'black',
            textDecoration: 'none',
            position: 'relative',
            marginBottom: 10,
        }}>
            <motion.div
            id='home-button-nav-container-bg'
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#eee',
            }}
            whileHover={{ backgroundColor: '#ccc' }}>
            </motion.div>
            <div style={{zIndex: 999, marginTop: 100, height: 200}}>
                One Automotive
            </div>
        </NavLink>
            <div 
            id='home-button-nav-container'
            style={{
                position: 'relative',
                width: '100vw',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <Button page='onesubaru'>
                    <motion.div
                    id='home-button-nav-container-bg'
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${wrx_image})`,
                        backgroundSize: 1200,
                        backgroundPosition: '50% 50%',
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
                    id='home-button-nav-container-bg'
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${highlander_image})`,
                        backgroundSize: 1300,
                        backgroundPosition: '20% 50%',
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
                    id='home-button-nav-container-bg'
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${tundra_image})`,
                        backgroundSize: 1300,
                        backgroundPosition: '80% 100%',
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
            </div>
        </motion.div>
    )
}