import SubHeader from './SubHeader'
import Row from './Row'
import EditRow from './EditRow'
import ModalHeader from "./ModalHeader";
import { updateDailyRecap, deleteDailyRecap } from '../../../../../fetchData/requestDB';
import { motion } from 'framer-motion';
import './Modal.css'
import { CSVLink } from 'react-csv';

export default function Modal({ data, editing, setEditing, perms, page, selected, setSelected, workDaysComponent, isAll }){
    if(data.date > 0 && data.date <= 12){
        data.date = new Date(`${data.date}/1/2000`).toDateString().slice(4, 7)
    }   
    
    if(data){
        if(editing === data._id){
            return(
                <div 
                id='recap-modal'
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
                    <div style={{
                        position: 'absolute',
                        display: 'flex',
                        top: 47.5,
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
                                    units_new: document.getElementById('daily-units-new').value,
                                    units_used: document.getElementById('daily-units-used').value,
                                    gross_new: document.getElementById('daily-gross-new').value,
                                    gross_used: document.getElementById('daily-gross-used').value,
                                    appraisals_acquired: document.getElementById('appraisals-acquired').value,
                                    appraisals_appraised: document.getElementById('appraisals-appraised').value,
                                    appointments_shown: document.getElementById('appointments-shown').value,
                                    appointments_scheduled: document.getElementById('appointments-scheduled').value,
                                    appointments_walk_ins: document.getElementById('appointments-walk_ins').value,
                                    appointments_buy_backs: document.getElementById('appointments-buy_backs').value,
                                    phone_pops_new: document.getElementById('ph-pops-new').value,
                                    phone_pops_used: document.getElementById('ph-pops-used').value,
                                    sources_referral: document.getElementById('sources-referral').value,
                                    sources_email: document.getElementById('sources-email').value,
                                    sources_phone: document.getElementById('sources-phone').value,
                                    sources_walk_in: document.getElementById('sources-walk_in').value,
                                    sources_service: document.getElementById('sources-service').value,
                                    sources_house: document.getElementById('sources-house').value,
                                    sources_repeat: document.getElementById('sources-repeat').value,
                                    sources_self: document.getElementById('sources-self_generated').value,
                                    finance: document.getElementById('finance').value,
                                    vsa: document.getElementById('vsa').value,
                                    gap: document.getElementById('gap').value,
                                    ppw: document.getElementById('ppw').value,
                                    t_w: document.getElementById('t_w').value,
                                    maintanence: document.getElementById('maintanence').value,
                                    service_service: document.getElementById('service_service').value,
                                    service_per_ro: document.getElementById('service_per_ro').value,
                                    service_alignments: document.getElementById('service_alignments').value,
                                    service_tires: document.getElementById('service_tires').value,
                                    service_open_ros: document.getElementById('service_open_ros').value,
                                    shop_hours_day_cp: document.getElementById('shop_hours_day_cp').value,
                                    shop_hours_day_w: document.getElementById('shop_hours_day_w').value,
                                    shop_hours_day_int: document.getElementById('shop_hours_day_int').value,
                                    contact_emails_in: document.getElementById('contact-emails-in').value,
                                    contact_emails_out: document.getElementById('contact-emails-out').value,
                                    contact_texts: document.getElementById('contact-texts').value,
                                    contact_appointments: document.getElementById('contact-appointments').value,
                                    contact_recalls: document.getElementById('contact-recalls').value,
                                    p_a_parts: document.getElementById('p_a-parts').value,
                                    p_a_accessories: document.getElementById('p_a-accessories').value,
                                    wholesale_units: document.getElementById('wholesale-units').value,
                                    wholesale_amount: document.getElementById('wholesale-amount').value,
                                    gross_day: document.getElementById('gross-day').value,
                                    pvr_day: document.getElementById('pvr-day').value,
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
                    <>
                    <div style={{
                        backgroundColor: '#ff4242',
                        color: 'white',
                        padding: 5,
                        borderRadius: 5,
                        cursor: 'pointer',
                        position: 'absolute',
                        top: 46,
                        left: 10,
                    }}
                    onClick={() => {
                        deleteDoc(data._id)
                    }}>
                        Delete
                    </div>
                    </>}

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

                    <SubHeader columns={[['Sources', 1]]} />
                    <EditRow columns={[['Referral', 1], [parseInt(data.sources.referral), 1, 'sources-referral']]} />
                    <EditRow columns={[['Email', 1], [parseInt(data.sources.email), 1, 'sources-email']]} />
                    <EditRow columns={[['Phone', 1], [parseInt(data.sources.phone), 1, 'sources-phone']]} />
                    <EditRow columns={[['Walk In', 1], [parseInt(data.sources.walk_in), 1, 'sources-walk_in']]} />
                    <EditRow columns={[['Service', 1], [parseInt(data.sources.service), 1, 'sources-service']]} />
                    <EditRow columns={[['House', 1], [parseInt(data.sources.house), 1, 'sources-house']]} />
                    <EditRow columns={[['Repeat', 1], [parseInt(data.sources.repeat), 1, 'sources-repeat']]} />
                    <EditRow columns={[['Self Generated', 1], [parseInt(data.sources.self), 1, 'sources-self_generated']]} />
                    <EditRow columns={[['Total', 1], ['', 2]]} />

                    <SubHeader columns={[['PH. Pops', 1]]} />
                    <EditRow columns={[['New', 1], [parseInt(data.phone_pops.new), 2, 'ph-pops-new']]} />
                    <EditRow columns={[['Used', 1], [parseInt(data.phone_pops.used), 2, 'ph-pops-used']]} />
                    <Row columns={[['TOTAL', 1], ['', 2]]} />

                    <SubHeader columns={[['Finance', 1],['VSA', 1],['GAP', 1],['PPW', 1],['T&W', 1],['Maint.', 1],['Closing %', 1]]} />
                    <EditRow columns={[[parseInt(data.finance), 1, 'finance'],[parseInt(data.vsa), 1, 'vsa'],[parseInt(data.gap), 1, 'gap'],[parseInt(data.ppw), 1, 'ppw'],[parseInt(data.t_w), 1, 't_w'],[parseInt(data.maintanence), 1, 'maintanence'],['%', 1]]} />

                    <SubHeader columns={[['Service', 1],['$ Per RO', 1],['Alignment', 1],['Tires', 1], ['Open ROs', 1]]} />
                    <EditRow columns={[[parseInt(data.service.service), 1, 'service_service'],[parseInt(data.service.per_ro), 1, 'service_per_ro'],[parseInt(data.service.alignments), 1, 'service_alignments'],[parseInt(data.service.tires), 1, 'service_tires'],[parseInt(data.service.tires), 1, 'service_open_ros']]} />

                    <SubHeader columns={[['Shop Hours', 1]]} />
                    <EditRow columns={[['Day-CP', 1],[parseInt(data.shop_hours.day.cp), 1, 'shop_hours_day_cp']]} />
                    <EditRow columns={[['Day-W', 1],[parseInt(data.shop_hours.day.w), 1, 'shop_hours_day_w']]} />
                    <EditRow columns={[['Day-INT', 1],[parseInt(data.shop_hours.day.int), 1, 'shop_hours_day_int']]} />
                    <EditRow columns={[['Total', 1],['', 1]]} />

                    <SubHeader columns={[['BDC', 1]]} />
                    <SubHeader columns={[['Emails In', 1], ['Emails Out', 1], ['Texts', 1], ['Appointments', 1], ['Recalls', 1],]} />
                    <EditRow columns={[[parseInt(data.contact.emails.in), 1, 'contact-emails-in'], [parseInt(data.contact.emails.out), 1, 'contact-emails-out'], [parseInt(data.contact.texts), 1, 'contact-texts'], [parseInt(data.contact.appointments), 1, 'contact-appointments'], [parseInt(data.contact.recalls), 1, 'contact-recalls']]} />

                    <SubHeader columns={[['Parts', 1], ['Accessories', 1]]} />
                    <EditRow columns={[[parseInt(data.p_a.parts), 1, 'p_a-parts'],[parseInt(data.p_a.accessories), 1, 'p_a-accessories']]} />

                    <SubHeader columns={[['Wholesale', 1]]} />
                    <EditRow columns={[['Units', 1],[parseInt(data.wholesale.units), 2, 'wholesale-units']]} />
                    <EditRow columns={[['Amount', 1],[parseInt(data.wholesale.amount), 2, 'wholesale-amount']]} />

                    <SubHeader columns={[['Gross/Day', 1], ['PVR/Day', 1]]} />
                    <EditRow columns={[[parseInt(data.gross_pvr.gross), 1, 'gross-day'],[parseInt(data.gross_pvr.pvr), 1, 'pvr-day']]} />
                </div>
            )
        }else{

            return(
                <>
                    {workDaysComponent}
                    <div
                    id='recap-modal'
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
                            {(perms.admin || perms.edit) && page === 'day' && !isAll &&
                            <svg viewBox="0 0 300 300" style={{ width: 25, height: 25, position: 'absolute', top: selected === data._id ? 47.5 : 7.5, right: 7.5, zIndex: 9998, filter: 'invert()', cursor: 'pointer' }}
                            onClick={() => setEditing(data._id)}>
                                <g>
                                    <path d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896
                                        l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"/>
                                    <path d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095
                                        L265.13,75.602L231.035,41.507z"/>
                                </g>
                            </svg>}
                            {selected === data._id && 
                            <motion.div style={{
                                width: '100%',
                                height: 40,
                                fontWeight: 'bold',
                                display: 'flex',
                                justifyContent: 'center',
                                cursor: 'pointer',
                            }}
                            whileHover={{ backgroundColor: '#ccc' }}>
                                <CSVLink {...exportAsCsv(data)} style={{ marginTop: 10, color: 'black', textDecoration: 'none' }}>Export as CSV</CSVLink>
                            </motion.div>}

                            <ModalHeader>Daily Recap {data.date}</ModalHeader>
                        {selected === data._id ? 
                        <>
                            <motion.div
                            style={{
                                overflow: 'hidden'
                            }}
                            initial={{ height: 0 }}
                            animate={{ height: '' }}
                            exit={{ height: 0 }}
                            >
                                
                                <SubHeader columns={[['', 1], ['Units', 2], ['Gross', 2]]} />
                                <Row columns={[['New', 1], [data.day.units.new, 2], [new Intl.NumberFormat('en-US').format(data.day.gross.new), 2]]} />
                                <Row columns={[['Used', 1], [data.day.units.used, 2], [new Intl.NumberFormat('en-US').format(data.day.gross.used), 2]]} />
                    
                                <SubHeader columns={[['Appraisals']]}/>
                                <SubHeader columns={[['Acquired', 2], ['Appraised', 2], ['%', 1]]}/>
                                <Row columns={[[data.appraisals.acquired, 2], [data.appraisals.appraised, 2], [(parseInt(data.appraisals.acquired) * 100 / parseInt(data.appraisals.appraised)).toFixed(2) + '%', 1]]} />
                    
                                <SubHeader columns={[['', 1], ['Shown', 2], ['Scheduled', 2], ['%', 1]]} />
                                <Row columns={[['Appointments', 1], [data.appointments.shown, 2], [data.appointments.scheduled, 2], [(parseInt(data.appointments.shown) * 100 / parseInt(data.appointments.scheduled)).toFixed(2) + '%', 1]]} />
                                <Row columns={[['Walk Ins', 1], [data.appointments.walk_ins, 2], ['', 3]]} />
                                <Row columns={[['BBacks', 1], [data.appointments.buy_backs, 2], ['', 3]]}/>
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
                                <Row columns={[['Self Generated', 1], [data.sources.self, 2]]} />
                                <Row columns={[['Total', 1], [Object.values(data.sources).reduce((total, currentValue) => total = total + parseInt(currentValue),0), 2]]} />

                                <SubHeader columns={[['Finance', 1],['VSA', 1],['GAP', 1],['PPW', 1],['T&W', 1],['Maint.', 1],['Closing %', 1]]} />
                                <Row columns={[[data.finance, 1],[data.vsa, 1],[data.gap, 1],[data.ppw, 1],[data.t_w, 1],[data.maintanence, 1],[(((parseInt(data.day.units.new) + parseInt(data.day.units.used)) / (parseInt(data.appointments.walk_ins) + parseInt(data.appointments.buy_backs) + parseInt(data.appointments.shown) + parseInt(data.phone_pops.new) + parseInt(data.phone_pops.used))) * 100).toFixed(2) + '%', 1]]} />

                                <SubHeader columns={[['Service', 1],['$ Per RO', 1],['Alignment', 1],['Tires', 1], ['Open ROs', 1]]} />
                                <Row columns={[[new Intl.NumberFormat('en-US').format(data.service.service), 1],[new Intl.NumberFormat('en-US').format(data.service.per_ro), 1],[data.service.alignments, 1],[data.service.tires, 1],[parseInt(data.service.open_ros), 1]]} />

                                <SubHeader columns={[['Shop Hours', 1]]} />
                                <Row columns={[['Day-CP', 1],[data.shop_hours.day.cp, 1]]} />
                                <Row columns={[['Day-W', 1],[data.shop_hours.day.w, 1]]} />
                                <Row columns={[['Day-INT', 1],[data.shop_hours.day.int, 1]]} />
                                <Row columns={[['Total', 1],[parseInt(data.shop_hours.day.cp) + parseInt(data.shop_hours.day.w) + parseInt(data.shop_hours.day.int), 1]]} />

                                <SubHeader columns={[['BDC', 1]]} />
                                <SubHeader columns={[['Emails In', 1], ['Emails Out', 1], ['Texts', 1], ['Appointments', 1], ['Recalls', 1],]} />
                                <Row columns={[[data.contact.emails.in, 1], [data.contact.emails.out, 1], [data.contact.texts, 1], [data.contact.appointments, 1], [data.contact.recalls, 1]]} />

                                <SubHeader columns={[['Parts', 1], ['Accessories', 1]]} />
                                <Row columns={[[new Intl.NumberFormat('en-US').format(data.p_a.parts), 1],[data.p_a.accessories, 1]]} />

                                <SubHeader columns={[['Wholesale', 1]]} />
                                <Row columns={[['Units', 1],[data.wholesale.units, 2]]} />
                                <Row columns={[['Amount', 1],[new Intl.NumberFormat('en-US').format(data.wholesale.amount), 2]]} />

                                <SubHeader columns={[['Gross/Day', 1], ['PVR/Day', 1]]} />
                                <Row columns={[[data.gross_pvr.gross, 1],[data.gross_pvr.pvr, 1]]} />

                            </motion.div>
                        </>
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
                </>
            )
        }
    }

    async function importDocument(data, { 
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
                                            sources_self,
                                            finance,
                                            vsa,
                                            gap,
                                            ppw,
                                            t_w,
                                            maintanence,
                                            service_service,
                                            service_per_ro,
                                            service_alignments,
                                            service_tires,
                                            service_open_ros,
                                            shop_hours_day_cp,
                                            shop_hours_day_w,
                                            shop_hours_day_int,
                                            contact_emails_in,
                                            contact_emails_out,
                                            contact_texts,
                                            contact_appointments,
                                            contact_recalls,
                                            p_a_parts,
                                            p_a_accessories,
                                            wholesale_units,
                                            wholesale_amount,
                                            gross_day,
                                            pvr_day, }){
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
                repeat: sources_repeat ? sources_repeat : data.sources.repeat,
                self: sources_self ? sources_self : data.sources.self
            },
            finance: finance ? finance : data.finance,
            vsa: vsa ? vsa : data.vsa,
            gap: gap ? gap : data.gap,
            ppw: ppw ? ppw : data.ppw,
            t_w: t_w ? t_w : data.t_w,
            maintanence: maintanence ? maintanence : data.maintanence,
            service: {
                service: service_service ? service_service : data.service.service,
                per_ro: service_per_ro ? service_per_ro : data.service.per_ro,
                alignments: service_alignments ? service_alignments : data.service.alignments,
                tires: service_tires ? service_tires : data.service.tires,
                open_ros: service_open_ros ? service_open_ros : data.service.open_ros, 
            },
            shop_hours: {
                day:{
                    cp: shop_hours_day_cp ? shop_hours_day_cp : data.shop_hours.day.cp,
                    w: shop_hours_day_w ? shop_hours_day_w : data.shop_hours.day.w,
                    int: shop_hours_day_int ? shop_hours_day_int : data.shop_hours.day.int
                }
            },
            contact: {
                emails: {
                    in: contact_emails_in ? contact_emails_in : data.contact.emails.in,
                    out: contact_emails_out ? contact_emails_out : data.contact.emails.out
                },
                texts: contact_texts ? contact_texts : data.contact.texts,
                appointments: contact_appointments ? contact_appointments : data.contact.appointments,
                recalls: contact_recalls ? contact_recalls : data.contact.recalls,
            },
            p_a: {
                parts: p_a_parts ? p_a_parts : data.p_a.parts,
                accessories: p_a_accessories ? p_a_accessories : data.p_a.accessories,
            },
            wholesale: {
                units: wholesale_units ? wholesale_units : data.wholesale.units,
                amount: wholesale_amount ? wholesale_amount : data.wholesale.amount
            },
            gross_pvr: {
                gross: gross_day ? gross_day : data.gross_pvr.day,
                pvr: pvr_day ? pvr_day : data.gross_pvr.pvr
            }
          });
          window.location.reload()
    }

    async function deleteDoc(id){
        if(window.confirm('Are you sure you want to delete this document?')){
            await deleteDailyRecap(id);
            window.location.reload()
        }
    }

    function exportAsCsv(data){


        const headers = [
            { label: "One", key: "c1" },
            { label: "Recap", key: "c2" },
            { label: "Report", key: "c3" },
            { label: "", key: "c4" },
            { label: "", key: "c5" },
            { label: "", key: "c6" },
            { label: "", key: "c7" },
        ]

        const exportData = [
            { c1: ' ' },
            { c1: data.day.units.new, c2: data.day.gross.new, c3: 'New' },
            { c1: data.day.units.used, c2: data.day.gross.used, c3: 'Used' },
            { c1: ' ' },
            { c1: ' ', c2: 'Appraisals', c3: ' ' },
            { c1: 'Acquired', c2: 'Appraised', c3: '%' },
            { c1: data.appraisals.acquired, c2: data.appraisals.appraised, c3: ((data.appraisals.acquired / data.appraisals.appraised) * 100).toFixed(2) + '%' },
            { c1: ' ' },
            { c1: ' ', c2: 'Appointments', c3: ' ' },
            { c1: 'Shown', c2: 'Scheduled', c3: '%' },
            { c1: data.appointments.shown, c2: data.appointments.scheduled, c3: ((data.appointments.shown / data.appointments.scheduled) * 100).toFixed(2) + '%' },
            { c1: 'Walk Ins', c2: data.appointments.walk_ins },
            { c1: 'Buy Backs', c2: data.appointments.buy_backs },
            { c1: 'Total', c2: parseInt(data.appointments.buy_backs) + parseInt(data.appointments.walk_ins) + parseInt(data.appraisals.acquired) },
            { c1: ' ' },
            { c1: ' ', c2: 'Sources', c3: ' ' },
            { c1: 'Referral', c2: data.sources.referral },
            { c1: 'Email', c2: data.sources.email },
            { c1: 'Phone', c2: data.sources.phone },
            { c1: 'Walk In', c2: data.sources.walk_in },
            { c1: 'Service', c2: data.sources.service },
            { c1: 'House', c2: data.sources.house },
            { c1: 'Repeat', c2: data.sources.repeat },
            { c1: 'Self Generated', c2: data.sources.self },
            { c1: 'Total', c2: Object.values(data.sources).reduce((total, currentValue) => total = total + parseInt(currentValue),0) },
            { c1: ' ' },
            { c1: ' ', c2: 'Phone Pops', c3: ' ' },
            { c1: 'New', c2: data.phone_pops.new },
            { c1: 'Used', c2: data.phone_pops.used },
            { c1: 'Total', c2: parseInt(data.phone_pops.new) + parseInt(data.phone_pops.used) },
            { c1: 'Finance', c2: 'VSA', c3: 'Gap', c4: 'PPW', c5: 'T&W', c6: 'Maintanence', c7: 'Closing %' },
            { c1: data.finance, c2: data.vsa, c3: data.gap, c4: data.ppw, c5: data.t_w, c6: data.maintanence, c7: (((parseInt(data.day.units.new) + parseInt(data.day.units.used)) / (parseInt(data.appointments.walk_ins) + parseInt(data.appointments.buy_backs) + parseInt(data.appointments.shown) + parseInt(data.phone_pops.new) + parseInt(data.phone_pops.used))) * 100).toFixed(2) + '%' },
            { c1: ' ' },
            { c1: 'Service', c2: '$ Per RO', c3: 'Alignment', c4: 'Tires' },
            { c1: data.service.service, c2: data.service.per_ro, c3: data.service.alignments, c4: data.service.tires},
            { c1: ' ' },
            { c2: 'Shop Hours'},
            { c1: 'Day-CP', c2: data.shop_hours.day.cp },
            { c1: 'Day-W', c2: data.shop_hours.day.w },
            { c1: 'Day-INT', c2: data.shop_hours.day.int },
            { c1: 'Total', c2: parseInt(data.shop_hours.day.cp) + parseInt(data.shop_hours.day.w) + parseInt(data.shop_hours.day.int)},
            { c1: ' ' },
            { c1: 'Emails', c2: 'Texts', c3: 'Appointments', c4: 'Recalls' },
            { c1: data.contact.emails, c2: data.contact.texts, c3: data.contact.appointments, c4: data.contact.recalls},
            { c1: ' ' },
            { c1: 'Parts', c2: 'Accessories' },
            { c1: data.p_a.parts, c2: data.p_a.accessories},
            { c1: ' ' },
            { c2: 'Wholesale' },
            { c1: 'Units', c2: 'Amount' },
            { c1: data.wholesale.units, c2: data.wholesale.amount},
        ]



        const csvReport = {
            data: exportData,
            headers: null,
            filename: `report-${new Date().toLocaleDateString()}.csv`
          }

        return csvReport
    }
}