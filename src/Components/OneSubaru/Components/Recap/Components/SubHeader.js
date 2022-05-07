export default function SubHeader({ columns }){
    return(
        <div style={{
            width: '100%',
            backgroundColor: '#aaa',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
            padding: '10px 0',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-around',
        }}>
            {columns.map((column, index) => {
                return(
                    <span style={{
                        flex: column[1],
                    }}>
                        {column[0]}
                    </span>
                )
            })}
        </div>
    )
}