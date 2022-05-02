import SubHeader from './SubHeader'
import Row from './Row'
import EditRow from './EditRow'
import ModalHeader from "./ModalHeader";

export default function Modal({ e, editing, setEditing, perms }){
    if(editing === e.date){
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
                <ModalHeader>Daily Recap {e.date}</ModalHeader>

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
    
                <SubHeader id={e.date} columns={[['', 1], ['Units', 2], ['Gross', 2]]} />
                <EditRow id={e.date} columns={[['New', 1], [16, 2], [2, 2]]} />
                <EditRow id={e.date} columns={[['Used', 1], [42900, 2], [900, 2]]} />
    
                <SubHeader id={e.date} columns={[['', 1], ['Required', 2], ['Appraised', 2], ['%', 1]]}/>
                <EditRow id={e.date} columns={[['Appraisals', 1], [4, 2], [11, 2], ['', 1]]} />
                <EditRow id={e.date} columns={[['Demos', 1], [38, 2], ['', 2], ['', 1]]} />
                <EditRow id={e.date} columns={[['OTDBs', 1], ['', 2], ['', 2], ['', 1]]} />
                <EditRow id={e.date} columns={[['W/Is', 1], [14, 2], ['', 2], ['', 1]]} />
                <EditRow id={e.date} columns={[['BBs', 1], [0, 2], ['', 2], ['', 1]]} />
    
                <SubHeader id={e.date} columns={[['', 1], ['Shown', 2], ['Scheduled', 2], ['%', 1]]} />
                <EditRow id={e.date} columns={[['Appts', 1], [13, 2], [16, 2], ['', 1]]} />
                <EditRow id={e.date} columns={[['TOTAL', 1], [27, 2], ['', 2], ['', 1]]} />
                <EditRow id={e.date} columns={[['PH. POPS', 1], [17, 2], ['', 2], ['', 1]]} />
                <EditRow id={e.date} columns={[['New', 1], [15, 2], ['', 2], ['', 1]]} />
                <EditRow id={e.date} columns={[['Used', 1], [2, 2], ['', 2], ['', 1]]} />
                <EditRow id={e.date} columns={[['TOTAL', 1], [27, 2], ['', 2], ['', 1]]} />
    
                <SubHeader id={e.date} columns={[['Day', 1], ['', 2], ['', 2], ['', 1]]} />
            </div>
        )
    }else{

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

                {(perms.admin || perms.edit || perms.manage) && 
                <svg viewBox="0 0 300 300" style={{ width: 25, height: 25, position: 'absolute', top: 7.5, right: 7.5, zIndex: 9998, filter: 'invert()', cursor: 'pointer' }}
                onClick={() => setEditing(e.date)}>
                    <g>
                        <path d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896
                            l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"/>
                        <path d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095
                            L265.13,75.602L231.035,41.507z"/>
                    </g>
                </svg>}

                <ModalHeader>Daily Recap {e.date}</ModalHeader>
    
                <SubHeader id={e.date} columns={[['', 1], ['Units', 2], ['Gross', 2]]} />
                <Row id={e.date} columns={[['New', 1], [16, 2], [2, 2]]} />
                <Row id={e.date} columns={[['Used', 1], [42900, 2], [900, 2]]} />
    
                <SubHeader id={e.date} columns={[['', 1], ['Required', 2], ['Appraised', 2], ['%', 1]]}/>
                <Row id={e.date} columns={[['Appraisals', 1], [4, 2], [11, 2], ['', 1]]} />
                <Row id={e.date} columns={[['Demos', 1], [38, 2], ['', 2], ['', 1]]} />
                <Row id={e.date} columns={[['OTDBs', 1], ['', 2], ['', 2], ['', 1]]} />
                <Row id={e.date} columns={[['W/Is', 1], [14, 2], ['', 2], ['', 1]]} />
                <Row id={e.date} columns={[['BBs', 1], [0, 2], ['', 2], ['', 1]]} />
    
                <SubHeader id={e.date} columns={[['', 1], ['Shown', 2], ['Scheduled', 2], ['%', 1]]} />
                <Row id={e.date} columns={[['Appts', 1], [13, 2], [16, 2], ['', 1]]} />
                <Row id={e.date} columns={[['TOTAL', 1], [27, 2], ['', 2], ['', 1]]} />
                <Row id={e.date} columns={[['PH. POPS', 1], [17, 2], ['', 2], ['', 1]]} />
                <Row id={e.date} columns={[['New', 1], [15, 2], ['', 2], ['', 1]]} />
                <Row id={e.date} columns={[['Used', 1], [2, 2], ['', 2], ['', 1]]} />
                <Row id={e.date} columns={[['TOTAL', 1], [27, 2], ['', 2], ['', 1]]} />
    
                <SubHeader id={e.date} columns={[['Day', 1], ['', 2], ['', 2], ['', 1]]} />
            </div>
        )
    }
}