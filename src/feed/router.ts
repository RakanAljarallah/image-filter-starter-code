import { Router, Request, Response } from 'express';
import  {feed}  from './controller';
import { feedService } from './service';
import { clearFiles } from '../util/util';

const router: Router = Router();

// Get all feed items
router.get('/filteredimage', async (req: Request, res: Response) => {
    await clearFiles();
    const { image_url } = req.query;
    if (!image_url) {
        return res.status(401).send("File url is required")
    };
    if (!feedService.isValidImageUrl(image_url.toString())) {
        return res.status(400).send({ message: 'File url is required' });
    };

    const filteredImage = await feed.filterImage(image_url.toString());
    if(!filteredImage){
        return res.status(500).send("");
    };
    res.status(200).sendFile(filteredImage);
    
});

export const feedRouter: Router = router;