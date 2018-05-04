import {Router, Request, Response} from 'express';

const router: Router = Router();
let persons: any[] = [
    {
        id: 1,
        name: 'jorge',
        lastname: 'fragoza',
        age: 29
    },
    {
        id: 2,
        name: 'abril',
        lastname: 'fragoza',
        age: 20
    }];

router.get('/person/', (req: Request, res: Response) => {
    res.json(persons);
});

router.get('/person/:id', (req: Request, res: Response) => {
    const params = req.params;
    res.json(persons.find(i => {
        return i.id.toString() === params.id.toString()
    }) || []);
});

export const PersonController: Router = router;

// import {Router, Request, Response} from 'express';

// export class PersonController {
//     public router: Router;
//     private persons: any[] = [
//         {
//             id: 1,
//             name: 'jorge',
//             lastname: 'fragoza',
//             age: 29
//         },
//         {
//             id: 2,
//             name: 'abril',
//             lastname: 'fragoza',
//             age: 20
//         }
//     ];

//     constructor() {
//         this.router = Router();
//         this.defineRoutes();
//     }

//     private defineRoutes() {
//         this.router.get('/person/', (req: Request, res: Response) => {
//             res.json(this.persons);
//         });

//         this.router.get('/person/:id', (req: Request, res: Response) => {
//             let params = req.params;
//             res.json(this.persons.find(i => {
//                 return i.id.toString() === params.id.toString()
//             }) || []);
//         });
//     }
// }