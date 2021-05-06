import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'
import logo from './logo.svg'

const Navigation = () => {

    return (
        <Navbar bg="dark" variant="dark" className="justify-content-between">
            <Navbar.Brand>
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}Coasters_app!</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/montañas-rusas" className="nav-link">Montañas</Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation