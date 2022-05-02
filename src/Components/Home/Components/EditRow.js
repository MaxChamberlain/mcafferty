export default function EditRow({ columns }){
    return (
        <div style={{
            width: '100%',
            backgroundColor: '#eee',
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
            padding: '10px 0',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-around',
        }}>
            {columns.map(e => {
                return (
                    typeof e[0] === 'string' ?
                    <span style={{
                        flex: e[1],
                    }}>
                        {e[0]}
                    </span>
                    :
                    <input style={{
                        flex: e[1],
                        fontSize: 15,
                    }} 
                    placeholder={e[0]}
                    id={e[2]}
                    type="number"/>
                )
            })}
        </div>
    )
}