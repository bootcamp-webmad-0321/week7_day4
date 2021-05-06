import { Container } from 'react-bootstrap'

import CoastersList from './Coasters-list'

import './Coasters.css'

const Coasters = () => {

    return (


        <Container className="coasters-page">

            <h1>Listado de montañas rusas</h1>

            <hr />

            <CoastersList />

        </Container>

    )
}

export default Coasters