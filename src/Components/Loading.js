import { motion } from "framer-motion"

export function Loading(){
    return(
        <motion.div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgb(0,0,0,0.1)',
            zIndex: 10000,
            display: 'flex',
            justifyContent: 'center',
        }}>
            <svg version="1.1" id="L4" x="0px" y="0px" viewBox="0 0 52 100" enable-background="new 0 0 0 0" style={{
                width: 500,
            }}>
                <circle fill="#000" stroke="none" cx="6" cy="50" r="6">
                    <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"></animate>    
                </circle>
                <circle fill="#000" stroke="none" cx="26" cy="50" r="6">
                    <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"></animate>       
                </circle>
                <circle fill="#000" stroke="none" cx="46" cy="50" r="6">
                    <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"></animate>     
                </circle>
            </svg>
        </motion.div>
    )
}

export function Failed(){
    return(
        <motion.div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10000,
            display: 'flex',
            justifyContent: 'center',
        }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        >
            <div style={{
                marginTop: 20,
                backgroundColor: '#ff4133',
                width: 600,
                height: 100,
                borderRadius: 8,
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <span style={{
                    color: 'white',
                    fontSize: 30,
                    fontWeight: 'bold',

                }}>
                    Failed, try again in a moment
                </span>
            </div>
        </motion.div>
    )
}

export function Success(){
    return(
        <motion.div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10000,
            display: 'flex',
            justifyContent: 'center',
        }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 0.5, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        >
            <div style={{
                marginTop: 20,
                backgroundColor: '#65d93f',
                width: 600,
                height: 100,
                borderRadius: 8,
                textAlign: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <span style={{
                    color: 'white',
                    fontSize: 30,
                    fontWeight: 'bold',

                }}>
                    Success!
                </span>
            </div>
        </motion.div>
    )
}