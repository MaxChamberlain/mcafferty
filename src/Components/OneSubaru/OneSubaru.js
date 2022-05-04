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
                <Button page='onesubaru'>
                    Trip Pads
                </Button>
                <Button page='onesubaru'>
                    GSM Binder
                </Button>
                <Button page='onesubaru'>
                    F&I Menu
                </Button>
                <Button page='onesubaru/recaps'>
                    Product Knowledge Resources
                </Button>
                <Button page='onesubaru'>
                    Used Car Training Materials
                </Button>
                <Button page='onesubaru'>
                    Open Floor
                </Button>
            </motion.div>
        </div>
    )
}