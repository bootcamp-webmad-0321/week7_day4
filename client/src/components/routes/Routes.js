import { Switch, Route } from 'react-router-dom'
import CoasterDetails from '../pages/CoasterDetails/CoasterDetails'
import Coasters from '../pages/Coasters/Coasters'
import IndexPage from '../pages/Index/Index-page'
import NewCoaster from '../pages/NewCoaster/NewCoaster'


const Routes = () => {

    return (

        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/montañas-rusas" exact render={() => <Coasters />} />
            <Route path="/montañas-rusas/detalles/:coaster_id" render={props => <CoasterDetails {...props} />} />
            <Route path="/montañas-rusas/nueva" render={() => <NewCoaster />} />
        </Switch>

    )
}

export default Routes