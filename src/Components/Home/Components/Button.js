import { NavLink } from "react-router-dom"

export default function Button({children, page}){
    return(
        <NavLink to={`/${page}`} style={{
            width: '20%',
            height: 150,
            backgroundColor: '#ddd',
            border: '1px solid #ccc',
            borderRadius: 5,
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            textDecoration: 'none',
        }}>
            {children}
        </NavLink>
    )
}