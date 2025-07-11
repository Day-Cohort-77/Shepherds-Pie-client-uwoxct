import "./NavBar.css"
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom"


export const NavBar = () => {
   // const navigate = useNavigate()
    return (
    <ul className = "navbar">
        <li className = "navbar-item">
            <Link to = "/PlaceOrder">Place Order</Link>
        </li>
     </ul> 
        )}