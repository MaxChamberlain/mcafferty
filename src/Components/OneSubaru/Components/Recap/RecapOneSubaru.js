import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AddButton from './Components/AddButton'
import Modal from './Components/Modal'
import NewModal from './Components/NewModal'
import { getUser, getDailyRecaps } from "../../../../fetchData/requestDB";
import {Loading, Failed, Success} from '../../../Loading'

export default function RecapOneSubaru(){
    const [ perms, setPerms ] = useState(null)
    const [ adding, setAdding ] = useState(false)
    const [ editing, setEditing ] = useState(null)
    const [ selected, setSelected ] = useState(null)
    const [ post, setPost ] = useState(null)
    const [ loading, setLoading ] = useState(0)
    const [ page, setPage ] = useState('day')
    const [ month, setMonth ] = useState(5)
    const [ monthlyReduced, setMonthlyReduced ] = useState()

    useEffect(() => {
        getPerms()
        getPost()
    }, [])

    useEffect(() => {
        console.log(selected)
    }, [selected])


    useEffect(() => {
        const loadMonthly = async () => {
            setMonthlyReduced({
                _id: '5e9f9f9f9f9f9f9f9f9f9f9',
                date: month,
                day:{
                    units: {
                        new: 0,
                        used: 0
                    },
                    gross: {
                        new: 0,
                        used: 0
                    }
                },
                appraisals: {
                    acquired: 0,
                    appraised: 0
                },
                appointments: {
                    shown: 0,
                    scheduled: 0,
                    walk_ins: 0,
                    buy_backs: 0
                },
                phone_pops: {
                    new: 0,
                    used: 0
                }
            })

            setLoading(1)
            await post.forEach(curr => {
                if(new Date(curr.date).getMonth() + 1 === month){
                    setMonthlyReduced(prevState => {
                        let newObj = Object.assign(prevState)

                        newObj.day.units.new += parseInt(curr.day.units.new)
                        newObj.day.units.used += parseInt(curr.day.units.used)
                        newObj.day.gross.new += parseInt(curr.day.gross.new)
                        newObj.day.gross.used += parseInt(curr.day.gross.used)
                        newObj.appraisals.acquired +=  parseInt(curr.appraisals.acquired)
                        newObj.appraisals.appraised +=  parseInt(curr.appraisals.appraised)
                        newObj.appointments.shown +=  parseInt(curr.appointments.shown)
                        newObj.appointments.scheduled +=  parseInt(curr.appointments.scheduled)
                        newObj.appointments.walk_ins +=  parseInt(curr.appointments.walk_ins)
                        newObj.appointments.buy_backs +=  parseInt(curr.appointments.buy_backs)
                        newObj.phone_pops.new +=  parseInt(curr.phone_pops.new) 
                        newObj.phone_pops.used +=  parseInt(curr.phone_pops.used)

                        console.log(newObj)
                        return newObj
                    })
                } 
            })
            setLoading(0)
        }

        if(page === 'month'){
            loadMonthly()
        }
    }, [page, month])
    return(
        <>
            {loading === 1 && <Loading />}
            {loading === 2 && <Success />}
            {loading === 3 && <Failed />}
            <AddButton adding={adding} setAdding={setAdding} />

            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                fontSize: 20,
                backgroundColor: '#ddd',
                padding: 10,
                position: 'absolute',
                top: 80,
                left: 0,
                right: 0,
                zIndex: 9999
            }}>
                {[['Daily Recap', 'day'], ['Monthly Recap', 'month']].map(e => {
                    return(
                        <div style={{
                            cursor: 'pointer',
                            letterSpacing: page === e[1] ? '1px' : '0px',
                            color: page === e[1] ? 'black' : '#999'
                        }}
                        onClick={() => setPage(e[1])}
                        >
                            {e[0]}
                        </div>
                    )
                })}
            </div>

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
                    {post && (page === 'day' ? post.map(e => {
                        return <Modal selected={selected} setSelected={setSelected} data={e} page={page} perms={perms} setEditing={setEditing} editing={editing} />
                    })
                    :
                    monthlyReduced && loading === 0 && 
                        <Modal selected='5e9f9f9f9f9f9f9f9f9f9f9' data={monthlyReduced} perms={perms} setEditing={setEditing} editing={editing} />
                    )}
                </div>}
            </motion.div>
            {monthlyReduced && loading === 0 && page === 'month' && 
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    fontSize: 24,
                    backgroundColor: '#ddd',
                    padding: 10,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 9999
                }}>
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map(e => {
                        return <span style={{
                            color: month === e ? 'black' : '#999',
                            cursor: 'pointer',
                        }}
                        onClick={() => setMonth(e)}>
                            {new Date(`${e}/1/2020`).toLocaleString('default', { month: 'long' })}
                        </span>
                    })}
                </div>
            }
        </>
    )

    async function getPost(){
        try{
            setLoading(1)
            let data = await getDailyRecaps('one_subaru')
            setPost(data)
            setLoading(2)
            setTimeout(() => {
                setLoading(0)
            }, 1000)
        }catch(e) {
            console.log(e)
            setLoading(3)
            setTimeout(() => {
                setLoading(0)
            }, 3000)
        }
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