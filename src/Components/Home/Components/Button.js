import { NavLink } from "react-router-dom"

export default function Button({children, page}){
    return(
        <NavLink to={`/${page}`} id='home-page-nav-button'>
            {children}
        </NavLink>
    )
}