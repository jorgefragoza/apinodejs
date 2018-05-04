import {Router, Request, Response} from 'express';
import {ConfigRouter} from './../config.router';
import {Route} from './../entities/route';

const router: Router = Router();

const getRoutes = function() {
    let routes: Route[] = [];

    ConfigRouter.map(route => {
        route.stack.map(r => {
            r.route.stack.map(m => {
                routes.push(new Route(m.method, r.route.path));
            });
        });
    });

    return routes;
};

router.get('/', (req: Request, res: Response) => {
    res.json(getRoutes());
});

router.get('/home/', (req: Request, res: Response) => {
    res.json(getRoutes());
});

export const HomeController: Router = router;