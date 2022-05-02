import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AddButton from './Components/AddButton'
import Modal from './Components/Modal'
import NewModal from './Components/NewModal'
import { getUser, newDailyRecap, getDailyRecaps } from "../../fetchData/requestDB";

export default function Settings(){
    const [ perms, setPerms ] = useState(null)
    const [ adding, setAdding ] = useState(false)
    const [ editing, setEditing ] = useState(null)
    const [ post, setPost ] = useState(null)

    useEffect(() => {
        getPerms()
        getPost()
    }, [])

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
                    {adding && <NewModal setAdding={setAdding} />}
                    {post && post.map(e => {
                        return <Modal data={e} perms={perms}setEditing={setEditing} editing={editing} />
                    })}
                </div>}
            </motion.div>
        </>
    )

    async function getPost(){
        let data = await getDailyRecaps()
        setPost(data)
    }

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