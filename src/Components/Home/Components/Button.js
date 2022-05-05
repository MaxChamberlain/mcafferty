import { NavLink } from "react-router-dom"

export default function Button({children, page}){
    return(
        <NavLink to={`/${page}`} 
            style={{
            width: '33vw',
            height: 'calc(100vh - 100px)',
            marginTop: '60px',
            borderRadius: 5,
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textDecoration: 'none',
            position: 'relative',
        }}>
            {children}
        </NavLink>
    )
}