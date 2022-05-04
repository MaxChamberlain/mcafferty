import { motion } from "framer-motion"
import Button from "./Components/Button"

export default function OneSubaru(){
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
            }}>
                <Button page='onesubaru/recaps'>
                    Recaps
                </Button>
            </motion.div>
        </div>
    )
}