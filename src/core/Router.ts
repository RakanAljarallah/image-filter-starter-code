import { Router, Request, Response } from 'express';
import { feedRouter } from '../feed/router';
import { clearFiles } from '../util/util';


const router: Router = Router();

router.use('/', feedRouter);

router.get('/', async (req: Request, res: Response) => {

    res.send('src');
});

export const coreRouter: Router = router;