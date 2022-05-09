import { newDailyRecap } from "../../../../../fetchData/requestDB"
import SubHeader from './SubHeader'
import Row from './Row'
import EditRow from './EditRow'
import ModalHeader from "./ModalHeader";

export default function NewModal({ setAdding }){
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
                    console.log(document.getElementById('sources-referral').value)
                    importDocument(
                        {
                            date: document.getElementById('new-modal-date').value,
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
                            shop_hours_day_cp: document.getElementById('shop_hours_day_cp').value ?? 0,
                            shop_hours_day_w: document.getElementById('shop_hours_day_w').value ?? 0,
                            shop_hours_day_int: document.getElementById('shop_hours_day_int').value ?? 0,
                            contact_emails: document.getElementById('contact-emails').value ?? 0,
                            contact_texts: document.getElementById('contact-texts').value ?? 0,
                            contact_appointments: document.getElementById('contact-appointments').value ?? 0,
                            contact_recalls: document.getElementById('contact-recalls').value ?? 0,
                            p_a_parts: document.getElementById('p_a-parts').value ?? 0,
                            p_a_accessories: document.getElementById('p_a-accessories').value ?? 0,
                            wholesale_units: document.getElementById('wholesale-units').value,
                            wholesale_amount: document.getElementById('wholesale-amount').value,
                        }
                    )
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

            <ModalHeader>Daily Recap <input id='new-modal-date' placeholder='Enter date'></input></ModalHeader>

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

            <SubHeader columns={[['PH. Pops', 1]]} />
            <EditRow columns={[['New', 1], [, 2, 'ph-pops-new']]} />
            <EditRow columns={[['Used', 1], [, 2, 'ph-pops-used']]} />
            <Row columns={[['TOTAL', 1], ['', 2]]} />

            <SubHeader columns={[['Finance', 1],['VSA', 1],['GAP', 1],['PPW', 1],['T&W', 1],['Maint.', 1],['Closing %', 1]]} />
            <EditRow columns={[[, 1, 'finance'],[, 1, 'vsa'],[, 1, 'gap'],[, 1, 'ppw'],[, 1, 't_w'],[, 1, 'maintanence'],['%', 1]]} />

            <SubHeader columns={[['Service', 1],['$ Per RO', 1],['Alignment', 1],['Tires', 1]]} />
            <EditRow columns={[[, 1, 'service_service'],[, 1, 'service_per_ro'],[, 1, 'service_alignments'],[, 1, 'service_tires']]} />

            <SubHeader columns={[['Shop Hours', 1]]} />
            <EditRow columns={[['Day-CP', 1],[, 1, 'shop_hours_day_cp']]} />
            <EditRow columns={[['Day-W', 1],[, 1, 'shop_hours_day_w']]} />
            <EditRow columns={[['Day-INT', 1],[, 1, 'shop_hours_day_int']]} />
            <EditRow columns={[['Total', 1],['', 1]]} />

            <SubHeader columns={[['Emails', 1], ['Texts', 1], ['Appointments', 1], ['Recalls', 1],]} />
            <EditRow columns={[[, 1, 'contact-emails'], [, 1, 'contact-texts'], [, 1, 'contact-appointments'], [, 1, 'contact-recalls']]} />

            <SubHeader columns={[['Parts', 1], ['Accessories', 1]]} />
            <EditRow columns={[[, 1, 'p_a-parts'],[, 1, 'p_a-accessories']]} />

            <SubHeader columns={[['Wholesale', 1]]} />
            <EditRow columns={[['Units', 1],[, 2, 'wholesale-units']]} />
            <EditRow columns={[['Amount', 1],[, 2, 'wholesale-amount']]} />

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
                                    shop_hours_day_cp,
                                    shop_hours_day_w,
                                    shop_hours_day_int,
                                    contact_emails,
                                    contact_texts,
                                    contact_appointments,
                                    contact_recalls,
                                    p_a_parts,
                                    p_a_accessories,
                                    wholesale_units,
                                    wholesale_amount, }){
        console.log(sources_referral)
        await newDailyRecap({
            location: 'one_subaru',
            date: date,
            day:{
              units: {
                new: units_new,
                used: units_used
              },
              gross: {
                new: gross_new,
                used: gross_used
              }
            },
            appraisals: {
              acquired: appraisals_acquired,
              appraised: appraisals_appraised
            },
            appointments: {
              shown: appointments_shown,
              scheduled: appointments_scheduled,
              walk_ins: appointments_walk_ins,
              buy_backs: appointments_buy_backs
            },
            phone_pops: {
              new: phone_pops_new,
              used: phone_pops_used
            },
            sources: {
                referral: sources_referral,
                email: sources_email,
                phone: sources_phone,
                walk_in: sources_walk_in,
                service: sources_service,
                house: sources_house,
                repeat: sources_repeat,
                self: sources_self
            },
            finance: finance,
            vsa: vsa,
            gap: gap,
            ppw: ppw,
            t_w: t_w,
            maintanence: maintanence,
            service: {
                service: service_service,
                per_ro: service_per_ro,
                alignments: service_alignments,
                tires: service_tires,
            },
            shop_hours: {
                day:{
                    cp: shop_hours_day_cp,
                    w: shop_hours_day_w,
                    int: shop_hours_day_int
                }
            },
            contact: {
                emails: contact_emails,
                texts: contact_texts,
                appointments: contact_appointments,
                recalls: contact_recalls
            },
            p_a: {
                parts: p_a_parts,
                accessories: p_a_accessories
            },
            wholesale: {
                units: wholesale_units,
                amount: wholesale_amount
            }
          });
          window.location.reload()
    }
}