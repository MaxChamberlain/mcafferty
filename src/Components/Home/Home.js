import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AddButton from './Components/AddButton'
import Modal from './Components/Modal'
import NewModal from './Components/NewModal'
import { getUser, newDailyRecap, getDailyRecaps } from "../../fetchData/requestDB";
import {Loading, Failed, Success} from '../Loading'

export default function Settings(){
    const [ perms, setPerms ] = useState(null)
    const [ adding, setAdding ] = useState(false)
    const [ editing, setEditing ] = useState(null)
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
                <span style={{
                    color: page === 'day' ? 'black' : '#999',
                    cursor: 'pointer',
                }}
                onClick={() => setPage('day')}>
                    Daily Recap
                </span>
                <span style={{
                    color: page === 'month' ? 'black' : '#999',
                    cursor: 'pointer',
                }}
                onClick={() => setPage('month')}>
                    Monthly Recap
                </span>
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
                        return <Modal data={e} perms={perms} setEditing={setEditing} editing={editing} />
                    })
                    :
                    monthlyReduced && loading === 0 && 
                    <>
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
                            <span style={{
                                color: month === 1 ? 'black' : '#999',
                                cursor: 'pointer',
                            }}
                            onClick={() => setMonth(1)}>
                                Jan
                            </span>
                            <span style={{
                                color: month === 2 ? 'black' : '#999',
                                cursor: 'pointer',
                            }}
                            onClick={() => setMonth(2)}>
                                Feb
                            </span>
                            <span style={{
                                color: month === 3 ? 'black' : '#999',
                                cursor: 'pointer',
                            }}
                            onClick={() => setMonth(3)}>
                                Mar
                            </span>
                            <span style={{
                                color: month === 4 ? 'black' : '#999',
                                cursor: 'pointer',
                            }}
                            onClick={() => setMonth(4)}>
                                Apr
                            </span>
                            <span style={{
                                color: month === 5 ? 'black' : '#999',
                                cursor: 'pointer',
                            }}
                            onClick={() => setMonth(5)}>
                                May
                            </span>
                            <span style={{
                                color: month === 6 ? 'black' : '#999',
                                cursor: 'pointer',
                            }}
                            onClick={() => setMonth(6)}>
                                Jun
                            </span>
                            <span style={{
                                color: month === 7 ? 'black' : '#999',
                                cursor: 'pointer',
                            }}
                            onClick={() => setMonth(7)}>
                                Jul
                            </span>
                            <span style={{
                                color: month === 8 ? 'black' : '#999',
                                cursor: 'pointer',
                            }}
                            onClick={() => setMonth(8)}>
                                Aug
                            </span>
                            <span style={{
                                color: month === 9 ? 'black' : '#999',
                                cursor: 'pointer',
                            }}
                            onClick={() => setMonth(9)}>
                                Sep
                            </span>
                            <span style={{
                                color: month === 10 ? 'black' : '#999',
                                cursor: 'pointer',
                            }}
                            onClick={() => setMonth(10)}>
                                Oct
                            </span>
                            <span style={{
                                color: month === 11 ? 'black' : '#999',
                                cursor: 'pointer',
                            }}
                            onClick={() => setMonth(11)}>
                                Nov
                            </span>
                            <span style={{
                                color: month === 12 ? 'black' : '#999',
                                cursor: 'pointer',
                            }}
                            onClick={() => setMonth(12)}>
                                Dec
                            </span>
                        </div>
                        <Modal data={monthlyReduced} perms={perms} setEditing={setEditing} editing={editing} />
                    </>
                    )}
                </div>}
            </motion.div>
        </>
    )

    async function getPost(){
        try{
            setLoading(1)
            let data = await getDailyRecaps()
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