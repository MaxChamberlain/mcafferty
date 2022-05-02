import './stylesheet.css'
import { useState } from 'react'
import { getUserInfo } from '../../fetchData/requestDB'
import { motion } from "framer-motion";

export default function Signup({setLoggedIn}){
    const [ emailValid, setEmailValid ] = useState(true)
    const [ loading, setLoading ] = useState(0)

    return(
        <>
        {loading === 1 ? 
        <motion.div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            display: 'flex',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
            <div style={{
                backgroundColor: 'rgba(0,0,0,0.2)',
                zIndex: 9999,
                borderRadius: '5px',
                height: '300px',
                width: '800px',
                alignSelf: 'center',
            }}>
                
            </div>
        </motion.div>
        :
        loading === 2 ? 
        <motion.div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            display: 'flex',
            textAlign: 'center',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
            <span style={{
                borderRadius: '5px',
                height: '300px',
                width: '800px',
                alignSelf: 'center',
                paddingTop: 100,
                color: 'red'
            }}>
                User not found
            </span>
        </motion.div>
        :
        loading === 3 &&
        <motion.div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            display: 'flex',
            textAlign: 'center',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
            <span style={{
                borderRadius: '5px',
                height: '300px',
                width: '800px',
                alignSelf: 'center',
                paddingTop: 100,
                color: 'red'
            }}>
                Error, please try again
            </span>
        </motion.div>
        }
            <div style={{
            borderRadius: '5px',
            height: '80%',
            width: '90%',
            marginLeft: '5%',
            marginTop: '5%'
            }}>
                <form onSubmit={e => {
                    e.preventDefault()
                    document.getElementById('email').value && document.getElementById('password').value && sendSignUp(document.getElementById('email').value, document.getElementById('password').value)
                    }}
                    style={{ position: 'relative' }}>
                    <input type="text" id="email" name="email" style={{
                        width: '80%',
                        marginLeft: '10%',
                        marginTop: 20,
                        height: 40,
                        borderRadius: 10,
                        border: '1px solid #cccccc',
                        fontSize: 20,
                    }}
                    placeholder="Enter your email"
                    required
                    />
                    {!emailValid && <label style={{
                        width: '100%',
                        marginLeft: '10%',
                        color: '#ff5252'
                    }}>Please enter a valid email address</label>}
                    <input type="password" id="password" name="password" style={{
                        width: '80%',
                        marginLeft: '10%',
                        marginTop: 20,
                        height: 40,
                        borderRadius: 10,
                        border: '1px solid #cccccc',
                        fontSize: 20,
                        marginBottom: 40
                    }}
                    placeholder="Enter a password"
                    required
                    />
                    <input id='submit' type="submit" style={{
                        position: 'absolute',
                        top: '100%',
                        left: 10,
                        right: 10,
                        fontSize: 40,
                        borderRadius: 5,
                        fontWeight: 'bold',
                        border: '0px solid white',
                        backgroundColor: '#5aa9ff',
                        color: 'white',
                        cursor: 'pointer',
                        zIndex: 9998
                    }}
                    />
                </form>
            </div>
        </>
    )

    async function sendSignUp(email, password){
        setLoading(1) // loading
        try{
            const data = await getUserInfo(email, password)
            if(data){
                document.cookie = '_309dc5ebe07576b1cbaf9107ebde8dcfa32fdd858cfe3887a4c8cb37dfbf3242=' + data.email + ';'
                window.location.reload()
                setLoading(0) // not loading
            }else{
                setLoading(2) // no user
            }
        }catch(e){
            setLoading(3) // error
            console.log(e)
        }
        
    }
}