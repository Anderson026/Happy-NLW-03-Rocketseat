/* importando o react */
import React from 'react';
/* importando as funções para a criação das rotas */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* importando as páginas */
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

/* configuração das rotas */
function Routes() {
    return (
        <BrowserRouter>

            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
            </Switch>

        </BrowserRouter>
    );
}
/* exportando as rotas */
export default Routes;