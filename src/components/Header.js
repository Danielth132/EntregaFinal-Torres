import Navbar from "./Navbar"
import { Link } from "react-router-dom"

const Header = (props) => {
    const isHeader = true
    return (
        <>
        <header className="header">
            <Link to="/" >
                <h1 className="header_title">{props.titulo}</h1>
            </Link>
            <Navbar 
                isHeader={isHeader}
            />
        </header>

    </>
    )
}

export default Header