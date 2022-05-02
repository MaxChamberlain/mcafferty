import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AddButton from './Components/AddButton'
import Modal from './Components/Modal'
import { getUser } from "../../fetchData/requestDB";

export default function Settings(){
    const [ perms, setPerms ] = useState(null)
    const [ adding, setAdding ] = useState(false)
    const [ editing, setEditing ] = useState(null)

    useEffect(() => {
        getPerms()
    }, [])

    useEffect(() => {
        console.log(editing)
    }, [editing])

    let e = {
        date: '05/02/2022'
    }

    return(
        <>
            <AddButton adding={adding} setAdding={setAdding} />
            <motion.div 
            initial={{x: -100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            exit={{x: -100, opacity: 0}}
            style={{
                position: 'absolute',
                top: 80,
                left: 10,
                right: 10,
                height: window.innerHeight - 80,
                overflow: 'scroll'
            }}>
                {perms && <div style={{
                    marginTop: 80,
                }}>
                    <Modal perms={perms} e={e} setEditing={setEditing} editing={editing} />
                </div>}
            </motion.div>
        </>
    )

    async function getPerms(){
        const email = document.cookie.split(';').map(e => {
            if(e.includes('_309dc5ebe07576b1cbaf9107ebde8dcfa32fdd858cfe3887a4c8cb37dfbf3242')){
                return e.split('=')[1]
            }
        })[0]
        const data = await getUser(email)
        setPerms(data.roles)
    }
}