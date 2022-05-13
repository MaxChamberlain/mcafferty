import './Modal.css'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function EditRow({ columns }){

    const [ focused, setFocused ] = useState(false)
    return (
        <div style={{
            width: '100% !important',
            backgroundColor: '#eee',
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
            padding: '10px 0',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-around',
        }}>
            {columns.map(e => {
                return (
                    <div style={{
                        flex: e[1],
                        position: 'relative'
                    }}>
                        {typeof e[0] === 'string' ?
                        <span>
                            {e[0]}
                        </span>
                        :
                        <>
                            <motion.input style={{
                                fontSize: 15,
                                width: '90%'
                            }} 
                            placeholder={e[0]}
                            id={e[2]}
                            type="number"
                            pattern="[0-9]*"
                            onFocus={() => {setFocused(e[2])}}
                            onBlur={() => {setFocused(null)}}
                            onKeyDown={e => numberOnly(e)} />
                            <div style={{
                                display: focused === e[2] ? 'block' : 'none',
                                position: 'absolute',
                                top: '100%',
                                right: 0,
                                width: '50%',
                                background: '#ccc',
                                padding: 5,
                                color: 'black',
                                zIndex: 999,
                                boxShadow: '0 3pt 8pt 1pt black',
                                opacity: 0.8
                            }}
                            activeModalInput="recap">
                                Previous: {e[0]}
                            </div>
                        </>}
                    </div>
                )
            })}
        </div>
    )

    function numberOnly(event){
        const charCode = event.which ? event.which : event.keyCode
        console.log(charCode)
        if(charCode > 31 && (charCode < 48 || charCode > 57)){
            event.preventDefault()
        }
    }
}