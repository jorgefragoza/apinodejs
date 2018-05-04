import {Router} from 'express';
import * as configRoutes from './api/.index';

let routes: Router[] = [];
let route: Router;

Object.keys(configRoutes).map(function(key, index) {
    /*
    version donde se exporta la clase y no la constante
    me decidí por esta versíon porque el objeto que requiero es nada mas la constante
    esta de mas instanciar la clase completa
    */
    //route = new configRoutes[key]().router;

    //version donde se recibe la constante exportada
    route = configRoutes[key];
    routes.push(route);
});

export const ConfigRouter: Router[] = routes;