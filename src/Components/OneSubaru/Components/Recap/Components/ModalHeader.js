export default function ModalHeader({ children }){
    return(
        <div style={{
            width: '100%',
            backgroundColor: '#436fb5',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            padding: '10px 0',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-around',
        }}>
            {children}
        </div>
    )
}