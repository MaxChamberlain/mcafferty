import { motion } from "framer-motion"
import Button from "../OneSubaru/Components/Button"

export default function OneAutomotive(){
    return(
        <div style={{
            width: '100vw',
        }}>
            <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            style={{
                width: '80vw',
                marginTop: 20,
                marginLeft: '10vw',
                overflow: 'scroll',
                height: 'calc(100vh - 80px)',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            }}>
                <Button page='oneauto/recaps'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{
                    transform: 'scale(7.5)',
                    position: 'absolute'
                }}>
                    <path d="M424 96h-40v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V96H160v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V96H88c-22 0-40 18-40 40v272c0 22 18 40 40 40h336c22 0 40-18 40-40V136c0-22-18-40-40-40zm8 300c0 11-9 20-20 20H100c-11 0-20-9-20-20V216c0-4.4 3.6-8 8-8h336c4.4 0 8 3.6 8 8v180zM160 72c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V72zM384 72c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V72z">
                    </path>
                </svg>
                <span style={{
                    marginTop: 150,
                    fontSize: 30,
                }}>
                    Recaps
                </span>
                </Button>
            </motion.div>
        </div>
    )
}