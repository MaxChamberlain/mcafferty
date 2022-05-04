import SubHeader from './SubHeader'
import Row from './Row'
import EditRow from './EditRow'
import ModalHeader from "./ModalHeader";
import { updateDailyRecap, deleteDailyRecap } from '../../../../../fetchData/requestDB';
import { motion } from 'framer-motion';
import './Modal.css'

export default function Modal({ data, editing, setEditing, perms, page, selected, setSelected }){
    if(data.date > 0 && data.date <= 12){
        data.date = new Date(`${data.date}/1/2000`).toDateString().slice(4, 7)
    }
    
    if(data){
        if(editing === data._id){
            return(
                <div style={{
                    width: '50%',
                    margin: 'auto',
                    backgroundColor: '#f8f8f8',
                    borderRadius: '5px',
                    marginBottom: '10px',
                    position: 'relative',
                    border: '1px solid #cccccc',
                    marginBottom: 50
                }}>
                    <div style={{
                        position: 'absolute',
                        display: 'flex',
                        top: 7.5,
                        right: 7.5,
                    }}>
                        <div style={{
                            backgroundColor: '#5aa9ff',
                            color: 'white',
                            padding: 5,
                            borderRadius: 5,
                            cursor: 'pointer',
                            marginRight: 5
                        }}
                        onClick={() => {
                            importDocument(data,
                                {
                                    units_new: document.getElementById('daily-units-new').value ,
                                    units_used: document.getElementById('daily-units-used').value ,
                                    gross_new: document.getElementById('daily-gross-new').value ,
                                    gross_used: document.getElementById('daily-gross-used').value ,
                                    appraisals_acquired: document.getElementById('appraisals-acquired').value ,
                                    appraisals_appraised: document.getElementById('appraisals-appraised').value ,
                                    appointments_shown: document.getElementById('appointments-shown').value ,
                                    appointments_scheduled: document.getElementById('appointments-scheduled').value ,
                                    appointments_walk_ins: document.getElementById('appointments-walk_ins').value ,
                                    appointments_buy_backs: document.getElementById('appointments-buy_backs').value ,
                                    phone_pops_new: document.getElementById('ph-pops-new').value ,
                                    phone_pops_used: document.getElementById('ph-pops-used').value ,
                                    sources_referral: document.getElementById('sources-referral').value,
                                    sources_email: document.getElementById('sources-email').value,
                                    sources_phone: document.getElementById('sources-phone').value,
                                    sources_walk_in: document.getElementById('sources-walk_in').value,
                                    sources_service: document.getElementById('sources-service').value,
                                    sources_house: document.getElementById('sources-house').value,
                                    sources_repeat: document.getElementById('sources-repeat').value,
                                    finance: document.getElementById('finance').value,
                                    vsa: document.getElementById('vsa').value,
                                    gap: document.getElementById('gap').value,
                                }
                            )
                            setEditing(null)
                        }}>
                            Save
                        </div>
                        <div style={{
                            backgroundColor: '#999',
                            color: 'white',
                            padding: 5,
                            borderRadius: 5,
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            setEditing(null)
                        }}>
                            Cancel
                        </div>
                    </div>
                    
                    {(perms.admin || perms.delete) && 
                    <div style={{
                        backgroundColor: '#ff4242',
                        color: 'white',
                        padding: 5,
                        borderRadius: 5,
                        cursor: 'pointer',
                        position: 'absolute',
                        top: 10,
                        left: 20
                    }}
                    onClick={() => {
                        deleteDoc(data._id)
                    }}>
                        Delete
                    </div>}

                    <ModalHeader>Daily Recap {data.date}</ModalHeader>

                    <SubHeader columns={[['', 1], ['Units', 2], ['Gross', 2]]} />
                    <EditRow columns={[['New', 1], [parseInt(data.day.units.new), 2, 'daily-units-new'], [parseInt(data.day.gross.new), 2, 'daily-gross-new']]} />
                    <EditRow columns={[['Used', 1], [parseInt(data.day.units.used), 2, 'daily-units-used'], [parseInt(data.day.gross.used), 2, 'daily-gross-used']]} />

                    <SubHeader columns={[['Appraisals']]}/>
                    <SubHeader columns={[['Acquired', 2], ['Appraised', 2], ['%', 1]]}/>
                    <EditRow columns={[[parseInt(data.appraisals.acquired), 2, 'appraisals-acquired'], [parseInt(data.appraisals.appraised), 2, 'appraisals-appraised'], [((data.appraisals.acquired / data.appraisals.appraised) * 100).toFixed(2), 1, 'appraisals-percent']]} />

                    <SubHeader columns={[['', 1], ['Shown', 2], ['Scheduled', 2], ['%', 1]]} />
                    <EditRow columns={[['Appointments', 1], [parseInt(data.appointments.shown), 2, 'appointments-shown'], [parseInt(data.appointments.scheduled), 2, 'appointments-scheduled'], [(data.appointments.shown * 100 / data.appointments.scheduled).toFixed(2), 1]]} />
                    <EditRow columns={[['Walk Ins', 1], [parseInt(data.appointments.walk_ins), 2, 'appointments-walk_ins'], ['', 3]]} />
                    <EditRow columns={[['Buy Backs', 1], [parseInt(data.appointments.buy_backs), 2, 'appointments-buy_backs'], ['', 3]]}/>
                    <EditRow columns={[['TOTAL', 1], [data.appointments.shown + data.appointments.buy_backs + data.appointments.walk_ins, 2], ['', 2], ['', 1]]} />

                    <SubHeader columns={[['PH. Pops', 1]]} />
                    <EditRow columns={[['New', 1], [parseInt(data.phone_pops.new), 2, 'ph-pops-new']]} />
                    <EditRow columns={[['Used', 1], [parseInt(data.phone_pops.used), 2, 'ph-pops-used']]} />
                    <EditRow columns={[['TOTAL', 1], [data.phone_pops.new + data.phone_pops.used, 2]]} />

                    <SubHeader columns={[['Sources', 1]]} />
                    <EditRow columns={[['Referral', 1], [parseInt(data.sources.referral), 2, 'sources-referral']]} />
                    <EditRow columns={[['Email', 1], [parseInt(data.sources.email), 2, 'sources-email']]} />
                    <EditRow columns={[['Phone', 1], [parseInt(data.sources.phone), 2, 'sources-phone']]} />
                    <EditRow columns={[['Walk In', 1], [parseInt(data.sources.walk_in), 2, 'sources-walk_in']]} />
                    <EditRow columns={[['Service', 1], [parseInt(data.sources.service), 2, 'sources-service']]} />
                    <EditRow columns={[['House', 1], [parseInt(data.sources.house), 2, 'sources-house']]} />
                    <EditRow columns={[['Repeat', 1], [parseInt(data.sources.repeat), 2, 'sources-repeat']]} />
                    <EditRow columns={[['Total', 1], [String(Object.values(data.sources).reduce((total, currentValue) => total = total + parseInt(currentValue),0)), 2]]} />

                    <SubHeader columns={[['Finance', 1],['VSA', 1],['GAP', 1],['Closing %', 1]]} />
                    <EditRow columns={[[parseInt(data.finance), 1, 'finance'],[parseInt(data.vsa), 1, 'vsa'],[parseInt(data.gap), 1, 'gap'],[(((parseInt(data.day.units.new) + parseInt(data.day.units.used)) / (parseInt(data.appointments.walk_ins) + parseInt(data.appointments.buy_backs) + parseInt(data.appointments.shown) + parseInt(data.phone_pops.new) + parseInt(data.phone_pops.used))) * 100).toFixed(2) + '%', 1]]} />
                </div>
            )
        }else{

            return(
                <div
                style={{
                    width: '50%',
                    margin: 'auto',
                    backgroundColor: '#f8f8f8',
                    borderRadius: '5px',
                    marginBottom: '10px',
                    position: 'relative',
                    border: '1px solid #cccccc',
                    marginBottom: 50
                }}>
                    <>
                        {(perms.admin || perms.edit) && page === 'daily' &&
                        <svg viewBox="0 0 300 300" style={{ width: 25, height: 25, position: 'absolute', top: 7.5, right: 7.5, zIndex: 9998, filter: 'invert()', cursor: 'pointer' }}
                        onClick={() => setEditing(data._id)}>
                            <g>
                                <path d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896
                                    l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"/>
                                <path d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095
                                    L265.13,75.602L231.035,41.507z"/>
                            </g>
                        </svg>}
                        <ModalHeader>Daily Recap {data.date}</ModalHeader>
                    {selected === data._id ? 
                    <motion.div
                    style={{
                        overflow: 'hidden'
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: '' }}
                    exit={{ height: 0 }}
                    >
                        <SubHeader columns={[['', 1], ['Units', 2], ['Gross', 2]]} />
                        <Row columns={[['New', 1], [data.day.units.new, 2], [data.day.gross.new, 2]]} />
                        <Row columns={[['Used', 1], [data.day.units.used, 2], [data.day.gross.used, 2]]} />
            
                        <SubHeader columns={[['Appraisals']]}/>
                        <SubHeader columns={[['Acquired', 2], ['Appraised', 2], ['%', 1]]}/>
                        <Row columns={[[data.appraisals.acquired, 2], [data.appraisals.appraised, 2], [(parseInt(data.appraisals.acquired) * 100 / parseInt(data.appraisals.appraised)).toFixed(2) + '%', 1]]} />
            
                        <SubHeader columns={[['', 1], ['Shown', 2], ['Scheduled', 2], ['%', 1]]} />
                        <Row columns={[['Appointments', 1], [data.appointments.shown, 2], [data.appointments.scheduled, 2], [(parseInt(data.appointments.shown) * 100 / parseInt(data.appointments.scheduled)).toFixed(2) + '%', 1]]} />
                        <Row columns={[['Walk Ins', 1], [data.appointments.walk_ins, 2], ['', 3]]} />
                        <Row columns={[['Buy Backs', 1], [data.appointments.buy_backs, 2], ['', 3]]}/>
                        <Row columns={[['TOTAL', 1], [parseInt(data.appointments.shown) + parseInt(data.appointments.buy_backs) + parseInt(data.appointments.walk_ins), 2], ['', 2], ['', 1]]} />
                        
                        <SubHeader columns={[['PH. Pops', 1]]} />
                        <Row columns={[['New', 1], [data.phone_pops.new, 2]]} />
                        <Row columns={[['Used', 1], [data.phone_pops.used, 2]]} />
                        <Row columns={[['TOTAL', 1], [parseInt(data.phone_pops.new) + parseInt(data.phone_pops.used), 2]]} />

                        <SubHeader columns={[['Sources', 1]]} />
                        <Row columns={[['Referral', 1], [data.sources.referral, 2]]} />
                        <Row columns={[['Email', 1], [data.sources.email, 2]]} />
                        <Row columns={[['Phone', 1], [data.sources.phone, 2]]} />
                        <Row columns={[['Walk In', 1], [data.sources.walk_in, 2]]} />
                        <Row columns={[['Service', 1], [data.sources.service, 2]]} />
                        <Row columns={[['House', 1], [data.sources.house, 2]]} />
                        <Row columns={[['Repeat', 1], [data.sources.repeat, 2]]} />
                        <Row columns={[['Total', 1], [Object.values(data.sources).reduce((total, currentValue) => total = total + parseInt(currentValue),0), 2]]} />

                        <SubHeader columns={[['Finance', 1],['VSA', 1],['GAP', 1],['Closing %', 1]]} />
                        <Row columns={[[data.finance, 1],[data.vsa, 1],[data.gap, 1],[(((parseInt(data.day.units.new) + parseInt(data.day.units.used)) / (parseInt(data.appointments.walk_ins) + parseInt(data.appointments.buy_backs) + parseInt(data.appointments.shown) + parseInt(data.phone_pops.new) + parseInt(data.phone_pops.used))) * 100).toFixed(2) + '%', 1]]} />

                    </motion.div>
                        :
                    null}

                        {page === 'day' &&
                        <ModalHeader>
                            {selected === data._id ?
                            <svg onClick={() => setSelected(null)} width="30" height="30" viewBox="0 0 192 192" fill="none">
                                <rect index={data._id + '-arrow-1'} x="97" y="47" width="92" height="13" rx="6.5" transform="rotate(31.3991 26.7729 67)" fill="white"/>
                                <rect index={data._id + '-arrow-2'} x="16.7729" y="94.933" width="92" height="13" rx="6.5" transform="rotate(-31.4 87 114.933)" fill="white"/>
                            </svg>
                            :
                            <svg onClick={() => setSelected(data._id)} width="30" height="30" viewBox="0 0 192 192" fill="none">
                                <rect index={data._id + '-arrow-1'} x="26.7729" y="67" width="92" height="13" rx="6.5" transform="rotate(31.3991 26.7729 67)" fill="white"/>
                                <rect index={data._id + '-arrow-2'} x="87" y="114.933" width="92" height="13" rx="6.5" transform="rotate(-31.4 87 114.933)" fill="white"/>
                            </svg>
                            }
                        </ModalHeader>}
                    </>
                </div>
            )
        }
    }

    async function importDocument(data, { date, 
                                        units_new, 
                                        units_used, 
                                        gross_new, 
                                        gross_used, 
                                        appraisals_acquired, 
                                        appraisals_appraised, 
                                        appointments_shown, 
                                        appointments_scheduled, 
                                        appointments_walk_ins, 
                                        appointments_buy_backs, 
                                        phone_pops_new, 
                                        phone_pops_used, 
                                        sources_referral,
                                        sources_email,
                                        sources_phone,
                                        sources_walk_in,
                                        sources_service,
                                        sources_house,
                                        sources_repeat,
                                        finance,
                                        vsa,
                                        gap }){
        await updateDailyRecap(data._id, {
            day:{
              units: {
                new: units_new ? units_new : data.day.units.new,
                used: units_used ? units_used : data.day.units.used
              },
              gross: {
                new: gross_new ? gross_new : data.day.gross.new,
                used: gross_used ? gross_used : data.day.gross.used
              }
            },
            appraisals: {
              acquired: appraisals_acquired ? appraisals_acquired : data.appraisals.acquired,
              appraised: appraisals_appraised ? appraisals_appraised : data.appraisals.appraised
            },
            appointments: {
              shown: appointments_shown ? appointments_shown : data.appointments.shown,
              scheduled: appointments_scheduled ? appointments_scheduled : data.appointments.scheduled,
              walk_ins: appointments_walk_ins ? appointments_walk_ins : data.appointments.walk_ins,
              buy_backs: appointments_buy_backs ? appointments_buy_backs : data.appointments.buy_backs,
            },
            phone_pops: {
              new: phone_pops_new ? phone_pops_new : data.phone_pops.new,
              used: phone_pops_used ? phone_pops_used : data.phone_pops.used
            },
            sources: {
                referral: sources_referral ? sources_referral : data.sources.referral,
                email: sources_email ? sources_email : data.sources.email,
                phone: sources_phone ? sources_phone : data.sources.phone,
                walk_in: sources_walk_in ? sources_walk_in : data.sources.walk_in,
                service: sources_service ? sources_service : data.sources.service,
                house: sources_house ? sources_house : data.sources.house,
                repeat: sources_repeat ? sources_repeat : data.sources.repeat
            },
            finance: finance ? finance : data.finance,
            vsa: vsa ? vsa : data.vsa,
            gap: gap ? gap : data.gap
          });
          window.location.reload()
    }

    async function deleteDoc(id){
        if(window.confirm('Are you sure you want to delete this document?')){
            await deleteDailyRecap(id);
            window.location.reload()
        }
    }
}