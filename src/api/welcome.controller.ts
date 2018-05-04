import {Router, Request, Response} from 'express';

const router: Router = Router();

router.get('/welcome/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

router.get('/welcome/:name', (req: Request, res: Response) => {
    let {name} = req.params;

    res.send(`Hello, ${name}`);
});

export const WelcomeController: Router = router;

// import {Router, Request, Response} from 'express';

// export class WelcomeController {
//     public router: Router;
    
//     constructor() {
//         this.router = Router();
//         this.defineRoutes();
//     }

//     private defineRoutes() {
//         this.router.get('/welcome/', (req: Request, res: Response) => {
//             res.send('Hello, World!!!!');
//         });

//         this.router.get('/welcome/:name', (req: Request, res: Response) => {
//             let {name} = req.params;

//             res.send(`Hello, ${name}`);
//         })
//     }
// }