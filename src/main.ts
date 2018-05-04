import environment from './environment';
import express from 'express';
import {ConfigRouter} from './config.router';

export function init() {
    console.log('App Iniciada..', environment.name);

    const app: express.Application = express();
    const port: number = environment.port || 3000;

    app.use(function(req, res, next) {
        // console.log('remoteAddress', req.connection.remoteAddress);
        // console.log(req.headers.auth, req.url, req.method);
        // if(req.url !== '/api') {
        //     if(req.headers.auth !== 'tamarindo') {
        //         res.redirect('/api');
        //         return;
        //     }
        // }
        next();
        
    });

    ConfigRouter.map(route => {
        app.use('/api', route);
    });
    
    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}/api/`);
    });
}

init();