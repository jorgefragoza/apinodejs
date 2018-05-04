import {Router, Request, Response} from 'express';

const router: Router = Router();
let cars: any[] = [
    {
        id: 1,
        name: 'Honda Civic',
        model: 'LT',
        price: 468990
    },
    {
        id: 2,
        name: 'Honda Accord',
        model: 'XD',
        price: 650760
    }];

router.get('/car/', (req: Request, res: Response) => {
    res.json(cars);
});

router.get('/car/:id', (req: Request, res: Response) => {
    const params = req.params;
    res.json(cars.find(i => {
        return i.id.toString() === params.id.toString()
    }) || []);
});

export const CarController: Router = router;

// import {Router, Request, Response} from 'express';

// export class CarController {
//     public router: Router;
//     private cars: any[] = [
//         {
//             id: 1,
//             name: 'Honda Civic',
//             model: 'LT',
//             price: 468990
//         },
//         {
//             id: 2,
//             name: 'Honda Accord',
//             model: 'XD',
//             price: 650760
//         }
//     ];

//     constructor() {
//         this.router = Router();
//         this.defineRoutes();
//     }

//     private defineRoutes() {
//         this.router.get('/car/', (req: Request, res: Response) => {
//             res.json(this.cars);
//         });

//         this.router.get('/car/:id', (req: Request, res: Response) => {
//             let params = req.params;
//             res.json(this.cars.find(i => {
//                 return i.id.toString() === params.id.toString()
//             }) || []);
//         });
//     }
// }