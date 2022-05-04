import { NavLink } from "react-router-dom"

export default function Button({children, page}){
    return(
        <NavLink to={`/${page}`} style={{
            width: '100%',
            height: 100,
            backgroundColor: '#478eff',
            border: '1px solid #ccc',
            borderRadius: 5,
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textDecoration: 'none',
            marginTop: 20
        }}>
            {children}
        </NavLink>
    )
}