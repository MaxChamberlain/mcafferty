import { newDailyRecap } from "../../../../../fetchData/requestDB"
import SubHeader from './SubHeader'
import Row from './Row'
import EditRow from './EditRow'
import ModalHeader from "./ModalHeader";

export default function NewModal({ setAdding }){
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
        </div>
    )

    async function importDocument({ date, units_new, units_used, gross_new, gross_used, appraisals_acquired, appraisals_appraised, appointments_shown, appointments_scheduled, appointments_walk_ins, appointments_buy_backs, phone_pops_new, phone_pops_used }){
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
            }
          });
          window.location.reload()
    }
}