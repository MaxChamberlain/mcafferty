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
                            units_new: document.getElementById('new-modal-date').value,
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
                            finance: document.getElementById('finance').value,
                            vsa: document.getElementById('vsa').value,
                            gap: document.getElementById('gap').value,
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
            <EditRow columns={[['Total', 1], ['', 2]]} />

            <SubHeader columns={[['Finance', 1],['VSA', 1],['GAP', 1],['Closing %', 1]]} />
            <EditRow columns={[[, 1, 'finance'],[, 1, 'vsa'],[, 1, 'gap'],['%', 1]]} />

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
                                    finance,
                                    vsa,
                                    gap }){
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
                repeat: sources_repeat
            },
            finance: finance,
            vsa: vsa,
            gap: gap
          });
          window.location.reload()
    }
}