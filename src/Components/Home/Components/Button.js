import { NavLink } from "react-router-dom"

export default function Button({children, page}){
    return(
        <NavLink to={`/${page}`} 
            style={{
            width: '33vw',
            height: 'calc(100vh - 150px)',
            borderRadius: 5,
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            color: 'black',
            textDecoration: 'none',
            position: 'relative',
            backgroundColor: '#f8f8f8',
            marginTop: 50
        }}>
            {children}
        </NavLink>
    )
}