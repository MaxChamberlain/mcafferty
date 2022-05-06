import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AddButton from './Components/AddButton'
import Modal from './Components/Modal'
import WeekendModal from './Components/WeekendModal'
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
    const [ month, setMonth ] = useState(new Date().getMonth() + 1)
    const [ year, setYear ] = useState(new Date().getFullYear())
    const [ monthlyReduced, setMonthlyReduced ] = useState()
    const [ pace, setPace ] = useState(null)
    const [ workingDays, setWorkingDays ] = useState(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate())

    useEffect(() => {
        getPerms()
        getPost()
    }, [])


    useEffect(() => {
        const loadMonthly = async () => {
            setMonthlyReduced({
                _id: '5e9f9f9f9f9f9f9f9f9f9f9',
                count: 0,
                date: month + '/' + year,
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
                },
                sources: {
                    referral: 0,
                    email: 0,
                    phone: 0,
                    walk_in: 0,
                    service: 0,
                    house: 0,
                    repeat: 0
                },
                finance: 0,
                vsa: 0,
                gap: 0
            })

            setLoading(1)
            await post.forEach(curr => {
                if(new Date(curr.date).getMonth() + 1 === month && new Date(curr.date).getFullYear() === year){
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
                        newObj.sources.referral +=  parseInt(curr.sources.referral)
                        newObj.sources.email +=  parseInt(curr.sources.email)
                        newObj.sources.phone +=  parseInt(curr.sources.phone)
                        newObj.sources.walk_in +=  parseInt(curr.sources.walk_in)
                        newObj.sources.service +=  parseInt(curr.sources.service)
                        newObj.sources.house +=  parseInt(curr.sources.house)
                        newObj.sources.repeat +=  parseInt(curr.sources.repeat)
                        newObj.finance +=  parseInt(curr.finance)
                        newObj.vsa +=  parseInt(curr.vsa)
                        newObj.gap +=  parseInt(curr.gap)
                        newObj.count++

                        return newObj
                    })
                } 
            })
            setLoading(0)
        }

        const loadPace = async () => {
            setPace({
                _id: '5e8f8f8f8f8f8f8f8f8f8f8',
                date: month + '/' + year,
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
                },
                sources: {
                    referral: 0,
                    email: 0,
                    phone: 0,
                    walk_in: 0,
                    service: 0,
                    house: 0,
                    repeat: 0
                },
                finance: 0,
                vsa: 0,
                gap: 0
            })

            setLoading(1)
            await post.forEach(curr => {
                if(new Date(curr.date).getMonth() + 1 === month && new Date(curr.date).getFullYear() === year){
                    monthlyReduced && setPace(prevState => {
                        let newObj = Object.assign(prevState)


                        newObj.day.units.new = (monthlyReduced.day.units.new / monthlyReduced.count) * workingDays
                        newObj.day.units.used = (monthlyReduced.day.units.used / monthlyReduced.count) * workingDays
                        newObj.day.gross.new = (monthlyReduced.day.gross.new / monthlyReduced.count) * workingDays
                        newObj.day.gross.used = (monthlyReduced.day.gross.used / monthlyReduced.count) * workingDays
                        newObj.appraisals.acquired = (monthlyReduced.appraisals.acquired / monthlyReduced.count) * workingDays
                        newObj.appraisals.appraised = (monthlyReduced.appraisals.appraised / monthlyReduced.count) * workingDays
                        newObj.appointments.shown = (monthlyReduced.appointments.shown / monthlyReduced.count) * workingDays
                        newObj.appointments.scheduled = (monthlyReduced.appointments.scheduled / monthlyReduced.count) * workingDays
                        newObj.appointments.walk_ins = (monthlyReduced.appointments.walk_ins / monthlyReduced.count) * workingDays
                        newObj.appointments.buy_backs = (monthlyReduced.appointments.buy_backs / monthlyReduced.count) * workingDays
                        newObj.phone_pops.new = (monthlyReduced.phone_pops.new / monthlyReduced.count) * workingDays
                        newObj.phone_pops.used = (monthlyReduced.phone_pops.used / monthlyReduced.count) * workingDays
                        newObj.sources.referral = (monthlyReduced.sources.referral / monthlyReduced.count) * workingDays
                        newObj.sources.email = (monthlyReduced.sources.email / monthlyReduced.count) * workingDays
                        newObj.sources.phone = (monthlyReduced.sources.phone / monthlyReduced.count) * workingDays
                        newObj.sources.walk_in = (monthlyReduced.sources.walk_in / monthlyReduced.count) * workingDays
                        newObj.sources.service = (monthlyReduced.sources.service / monthlyReduced.count) * workingDays
                        newObj.sources.house = (monthlyReduced.sources.house / monthlyReduced.count) * workingDays
                        newObj.sources.repeat = (monthlyReduced.sources.repeat / monthlyReduced.count) * workingDays
                        newObj.finance = (monthlyReduced.finance / monthlyReduced.count) * workingDays
                        newObj.vsa = (monthlyReduced.vsa / monthlyReduced.count) * workingDays
                        newObj.gap = (monthlyReduced.gap / monthlyReduced.count) * workingDays
                        return newObj
                    })
                } 
            })
            setLoading(0)
        }
        const run = async () => {
            if(page === 'month'){
                loadMonthly()
            }else if(page === 'pace'){
                await loadMonthly(false)
                loadPace()
            }
        }
        run()
    }, [page, month, year, workingDays])
    return(
        <>
            {loading === 1 && <Loading />}
            {loading === 2 && <Success />}
            {loading === 3 && <Failed />}
            {page === 'day' && <AddButton adding={adding} setAdding={setAdding} />}

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
                {[['Daily Recap', 'day'], ['Monthly Recap', 'month'], ['Pace', 'pace']].map(e => {
                    return(
                        <div style={{
                            cursor: 'pointer',
                            letterSpacing: page === e[1] ? '1px' : '0px',
                            color: page === e[1] ? 'black' : '#999'
                        }}
                        onClick={e[1] !== 'pace' ? () => {setPage(e[1])} : () => {setPage('month'); setTimeout(() => setPage('pace'), 1)}}
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
                height: page === 'month' ? window.innerHeight - 160 : window.innerHeight - 80,
                overflow: 'scroll'
            }}>
                {perms && <div style={{
                    marginTop: 80,
                }}>
                    {adding && <NewModal setAdding={setAdding} />}
                    {post && (page !== 'month' && page !== 'pace' ? post.map(e => {
                        return page === 'day' ? 
                            <Modal selected={selected} setSelected={setSelected} data={e} page={page} perms={perms} setEditing={setEditing} editing={editing} />
                            :
                            <WeekendModal selected={selected} setSelected={setSelected} data={e} page={page} perms={perms} setEditing={setEditing} editing={editing} />
                    })
                    :
                    page === 'month' ? monthlyReduced && loading === 0 && 
                        <Modal selected='5e9f9f9f9f9f9f9f9f9f9f9' data={monthlyReduced} perms={perms} setEditing={setEditing} editing={editing} />
                        :
                        pace && <Modal selected='5e8f8f8f8f8f8f8f8f8f8f8' data={pace} perms={perms} setEditing={setEditing} editing={editing} workDaysComponent={
                            <div 
                            id='work-days-component'
                            style={{
                                position: 'absolute',
                                top: 60,
                                left: 10,
                                height: 50,
                                width: 250,
                                border: '1px solid black',
                            }}>
                                <input style={{
                                    width: '100%',
                                    height: '100%',
                                    fontSize: 30,
                                }}
                                type='number'
                                onChange={(e) => setWorkingDays(e.target.value)}
                                onBlur={e => e.target.value = ''}
                                placeholder={workingDays + ' working days'}/>
                            </div>
                        } />
                    )}
                </div>}
            </motion.div>
            {(monthlyReduced && loading === 0) && page === 'month' && 
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
                        zIndex: 8999
                    }}>
                        {[...new Set(post.map(item => new Date(item.date).getFullYear()))].map(e => {
                            return <span style={{
                                color: year === e ? 'black' : '#999',
                                cursor: 'pointer',
                            }}
                            onClick={() => setYear(e)}>
                                {new Date(`1/1/${e}`).getFullYear()}
                            </span>
                        })}
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        fontSize: 24,
                        backgroundColor: '#ddd',
                        padding: 10,
                        position: 'absolute',
                        bottom: 45,
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
                </>
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