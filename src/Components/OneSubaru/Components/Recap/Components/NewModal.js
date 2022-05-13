import { newDailyRecap } from "../../../../../fetchData/requestDB"
import SubHeader from './SubHeader'
import Row from './Row'
import EditRow from './EditRow'
import ModalHeader from "./ModalHeader"
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

export default function NewModal({ location, setAdding }){
    const [value, onChange] = useState(new Date());
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
                top: 7.5,
                right: 7.5
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
                    console.log(document.getElementById('new-modal-date').children[0].children[0].children[0].children[0].value)
                    document.getElementById('new-modal-date').children[0].children[0].children[0].children[0].value && 
                    importDocument(
                        {
                            date: new Date(document.getElementById('new-modal-date').children[0].children[0].children[0].children[0].value).toLocaleDateString('en-US'),
                            units_new: document.getElementById('new-modal-date').value ?? 0,
                            units_new: document.getElementById('daily-units-new').value ?? 0,
                            units_used: document.getElementById('daily-units-used').value ?? 0,
                            gross_new: document.getElementById('daily-gross-new').value ?? 0,
                            gross_used: document.getElementById('daily-gross-used').value ?? 0,
                            appraisals_acquired: document.getElementById('appraisals-acquired').value ?? 0,
                            appraisals_appraised: document.getElementById('appraisals-appraised').value ?? 0,
                            appointments_shown: document.getElementById('appointments-shown').value ?? 0,
                            appointments_scheduled: document.getElementById('appointments-scheduled').value ?? 0,
                            appointments_walk_ins: document.getElementById('appointments-walk_ins').value ?? 0,
                            appointments_buy_backs: document.getElementById('appointments-buy_backs').value ?? 0,
                            phone_pops_new: document.getElementById('ph-pops-new').value ?? 0,
                            phone_pops_used: document.getElementById('ph-pops-used').value ?? 0,
                            sources_referral: document.getElementById('sources-referral').value ?? 0,
                            sources_email: document.getElementById('sources-email').value ?? 0,
                            sources_phone: document.getElementById('sources-phone').value ?? 0,
                            sources_walk_in: document.getElementById('sources-walk_in').value ?? 0,
                            sources_service: document.getElementById('sources-service').value ?? 0,
                            sources_house: document.getElementById('sources-house').value ?? 0,
                            sources_repeat: document.getElementById('sources-repeat').value ?? 0,
                            sources_self: document.getElementById('sources-self_generated').value ?? 0,
                            finance: document.getElementById('finance').value ?? 0,
                            vsa: document.getElementById('vsa').value ?? 0,
                            gap: document.getElementById('gap').value ?? 0,
                            ppw: document.getElementById('ppw').value ?? 0,
                            t_w: document.getElementById('t_w').value ?? 0,
                            maintanence: document.getElementById('maintanence').value ?? 0,
                            service_service: document.getElementById('service_service').value ?? 0,
                            service_per_ro: document.getElementById('service_per_ro').value ?? 0,
                            service_alignments: document.getElementById('service_alignments').value ?? 0,
                            service_tires: document.getElementById('service_tires').value ?? 0,
                            service_open_ros: document.getElementById('service_open_ros').value ?? 0,
                            shop_hours_day_cp: document.getElementById('shop_hours_day_cp').value ?? 0,
                            shop_hours_day_w: document.getElementById('shop_hours_day_w').value ?? 0,
                            shop_hours_day_int: document.getElementById('shop_hours_day_int').value ?? 0,
                            contact_emails_in: document.getElementById('contact-emails-in').value ?? 0,
                            contact_emails_out: document.getElementById('contact-emails-out').value ?? 0,
                            contact_texts: document.getElementById('contact-texts').value ?? 0,
                            contact_appointments: document.getElementById('contact-appointments').value ?? 0,
                            contact_recalls: document.getElementById('contact-recalls').value ?? 0,
                            p_a_parts: document.getElementById('p_a-parts').value ?? 0,
                            p_a_accessories: document.getElementById('p_a-accessories').value ?? 0,
                            wholesale_units: document.getElementById('wholesale-units').value ?? 0,
                            wholesale_amount: document.getElementById('wholesale-amount').value ?? 0,
                            gross_day: document.getElementById('gross-day').value ?? 0,
                            pvr_day: document.getElementById('pvr-day').value ?? 0,
                        }
                    ) &&
                    setAdding(false)
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
                    setAdding(false)
                }}>
                    Cancel
                </div>
            </div>

            <ModalHeader>
                Daily Recap 
                <div style={{color: 'black !important'}} id='new-modal-date'>
                    <DatePicker onChange={onChange} value={value}/>
                </div>
            </ModalHeader>

            <SubHeader columns={[['', 1], ['Units', 2], ['Gross', 2]]} />
            <EditRow columns={[['New', 1], [, 2, 'daily-units-new'], [, 2, 'daily-gross-new']]} />
            <EditRow columns={[['Used', 1], [, 2, 'daily-units-used'], [, 2, 'daily-gross-used']]} />

            <SubHeader columns={[['Appraisals']]}/>
            <SubHeader columns={[['Acquired', 2], ['Appraised', 2], ['%', 1]]}/>
            <EditRow columns={[[, 2, 'appraisals-acquired'], [, 2, 'appraisals-appraised'], ['', 1, 'appraisals-percent']]} />

            <SubHeader columns={[['', 1], ['Shown', 2], ['Scheduled', 2], ['%', 1]]} />
            <EditRow columns={[['Appointments', 1], [, 2, 'appointments-shown'], [, 2, 'appointments-scheduled'], ['', 1]]} />
            <EditRow columns={[['Walk Ins', 1], [, 2, 'appointments-walk_ins'], ['', 3]]} />
            <EditRow columns={[['Buy Backs', 1], [, 2, 'appointments-buy_backs'], ['', 3]]}/>
            <Row columns={[['TOTAL', 1], ['', 2], ['', 2], ['', 1]]} />

            <SubHeader columns={[['PH. Pops', 1]]} />
            <EditRow columns={[['New', 1], [, 2, 'ph-pops-new']]} />
            <EditRow columns={[['Used', 1], [, 2, 'ph-pops-used']]} />
            <Row columns={[['TOTAL', 1], ['', 2]]} />

            <SubHeader columns={[['Sources', 1]]} />
            <EditRow columns={[['Referral', 1], [, 1, 'sources-referral']]} />
            <EditRow columns={[['Email', 1], [, 1, 'sources-email']]} />
            <EditRow columns={[['Phone', 1], [, 1, 'sources-phone']]} />
            <EditRow columns={[['Walk In', 1], [, 1, 'sources-walk_in']]} />
            <EditRow columns={[['Service', 1], [, 1, 'sources-service']]} />
            <EditRow columns={[['House', 1], [, 1, 'sources-house']]} />
            <EditRow columns={[['Repeat', 1], [, 1, 'sources-repeat']]} />
            <EditRow columns={[['Self Generated', 1], [, 1, 'sources-self_generated']]} />
            <EditRow columns={[['Total', 1], ['', 2]]} />

            <SubHeader columns={[['Finance', 1],['VSA', 1],['GAP', 1],['PPW', 1],['T&W', 1],['Maint.', 1],['Closing %', 1]]} />
            <EditRow columns={[[, 1, 'finance'],[, 1, 'vsa'],[, 1, 'gap'],[, 1, 'ppw'],[, 1, 't_w'],[, 1, 'maintanence'],['%', 1]]} />

            <SubHeader columns={[['Service', 1],['$ Per RO', 1],['Alignment', 1],['Tires', 1], ['Open ROs', 1]]} />
            <EditRow columns={[[, 1, 'service_service'],[, 1, 'service_per_ro'],[, 1, 'service_alignments'],[, 1, 'service_tires'],[, 1, 'service_open_ros']]} />

            <SubHeader columns={[['Shop Hours', 1]]} />
            <EditRow columns={[['Day-CP', 1],[, 1, 'shop_hours_day_cp']]} />
            <EditRow columns={[['Day-W', 1],[, 1, 'shop_hours_day_w']]} />
            <EditRow columns={[['Day-INT', 1],[, 1, 'shop_hours_day_int']]} />
            <EditRow columns={[['Total', 1],['', 1]]} />

            <SubHeader columns={[['BDC', 1]]} />
            <SubHeader columns={[['Emails In', 1], ['Emails Out', 1], ['Texts', 1], ['Appointments', 1], ['Recalls', 1],]} />
            <EditRow columns={[[, 1, 'contact-emails-in'], [, 1, 'contact-emails-out'], [, 1, 'contact-texts'], [, 1, 'contact-appointments'], [, 1, 'contact-recalls']]} />

            <SubHeader columns={[['Parts', 1], ['Accessories', 1]]} />
            <EditRow columns={[[, 1, 'p_a-parts'],[, 1, 'p_a-accessories']]} />

            <SubHeader columns={[['Wholesale', 1]]} />
            <EditRow columns={[['Units', 1],[, 2, 'wholesale-units']]} />
            <EditRow columns={[['Amount', 1],[, 2, 'wholesale-amount']]} />

            <SubHeader columns={[['Gross/Day', 1], ['PVR/Day', 1]]} />
            <EditRow columns={[[, 1, 'gross-day'], [, 1, 'pvr-day']]} />

        </div>
    )

    async function importDocument({ date, 
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

        const finalDate = new Date(date)
        finalDate.setDate(finalDate.getDate() + 1)

        await newDailyRecap({
            location: location,
            date: finalDate.toLocaleDateString('en-US'),
            day:{
              units: {
                new: units_new ? units_new : 0,
                used: units_used ? units_used : 0
              },
              gross: {
                new: gross_new ? gross_new : 0,
                used: gross_used ? gross_used : 0
              }
            },
            appraisals: {
              acquired: appraisals_acquired ? appraisals_acquired : 0,
              appraised: appraisals_appraised ? appraisals_appraised : 0
            },
            appointments: {
              shown: appointments_shown ? appointments_shown : 0,
              scheduled: appointments_scheduled ? appointments_scheduled : 0,
              walk_ins: appointments_walk_ins ? appointments_walk_ins : 0,
              buy_backs: appointments_buy_backs ? appointments_buy_backs : 0
            },
            phone_pops: {
              new: phone_pops_new ? phone_pops_new : 0,
              used: phone_pops_used ? phone_pops_used : 0
            },
            sources: {
                referral: sources_referral ? sources_referral : 0,
                email: sources_email ? sources_email : 0,
                phone: sources_phone ? sources_phone : 0,
                walk_in: sources_walk_in ? sources_walk_in : 0,
                service: sources_service ? sources_service : 0,
                house: sources_house ? sources_house : 0,
                repeat: sources_repeat ? sources_repeat : 0,
                self: sources_self ? sources_self : 0
            },
            finance: finance ? finance : 0,
            vsa: vsa ? vsa : 0,
            gap: gap ? gap : 0,
            ppw: ppw ? ppw : 0,
            t_w: t_w ? t_w : 0,
            maintanence: maintanence ? maintanence : 0,
            service: {
                service: service_service ? service_service : 0,
                per_ro: service_per_ro ? service_per_ro : 0,
                alignments: service_alignments ? service_alignments : 0,
                tires: service_tires ? service_tires : 0,
                open_ros: service_open_ros ? service_open_ros : 0
            },
            shop_hours: {
                day:{
                    cp: shop_hours_day_cp ? shop_hours_day_cp : 0,
                    w: shop_hours_day_w ? shop_hours_day_w : 0,
                    int: shop_hours_day_int ? shop_hours_day_int : 0
                }
            },
            contact: {
                emails: {
                    in: contact_emails_in ? contact_emails_in : 0,
                    out: contact_emails_out ? contact_emails_out : 0
                },
                texts: contact_texts ? contact_texts : 0,
                appointments: contact_appointments ? contact_appointments : 0,
                recalls: contact_recalls ? contact_recalls : 0
            },
            p_a: {
                parts: p_a_parts ? p_a_parts : 0,
                accessories: p_a_accessories ? p_a_accessories : 0
            },
            wholesale: {
                units: wholesale_units ? wholesale_units : 0,
                amount: wholesale_amount ? wholesale_amount : 0
            },
            gross_pvr: {
                gross: gross_day ? gross_day : 0,
                pvr: pvr_day ? pvr_day : 0
            }
          });
          window.location.reload()
    }
}