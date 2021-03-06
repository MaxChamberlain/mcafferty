export default function AddButton({ adding, setAdding }){
    return(
        <div style={{
            backgroundColor: '#478eff',
            width: 50,
            height: 50,
            borderRadius: '100%',
            position: 'absolute',
            right: 30,
            top: 140,
            zIndex: 9999
        }}
        onClick={() => setAdding(wasAdding => !wasAdding)}>
            <svg version="1.1" x="0px" y="0px" width="459.325px" height="459.325px" viewBox="0 0 459.325 459.325" style={{
                width: 30,
                height: 30,
                marginTop: 10,
                marginLeft: 10,
                filter: 'invert()',
            }}>
            <g>
                <path d="M459.319,229.668c0,22.201-17.992,40.193-40.205,40.193H269.85v149.271c0,22.207-17.998,40.199-40.196,40.193
                    c-11.101,0-21.149-4.492-28.416-11.763c-7.276-7.281-11.774-17.324-11.769-28.419l-0.006-149.288H40.181
                    c-11.094,0-21.134-4.492-28.416-11.774c-7.264-7.264-11.759-17.312-11.759-28.413C0,207.471,17.992,189.475,40.202,189.475h149.267
                    V40.202C189.469,17.998,207.471,0,229.671,0c22.192,0.006,40.178,17.986,40.19,40.187v149.288h149.282
                    C441.339,189.487,459.308,207.471,459.319,229.668z"/>
            </g>
            </svg>
        </div>
    )
}