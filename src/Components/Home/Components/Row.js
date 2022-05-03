export default function Row({ columns }){
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
            borderBottom: '1px solid #ddd',
        }}>
            {columns.map(e => {
                return (
                    <span style={{
                        flex: e[1],
                    }}>
                        {e[0]}
                    </span>
                )
            })}
        </div>
    )
}