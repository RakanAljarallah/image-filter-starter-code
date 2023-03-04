import {Controller} from '../core/Controller';
import {feedModel}  from './model';
import { filterImageFromURL, deleteLocalFiles } from '../util/util';

class FeedItem extends Controller {
    feedModel: any;
    

    constructor()
    {
        super();
        this.feedModel =  feedModel;
    };

    async filterImage(imgaeUrl:string) {
        const filteredImage: string = await filterImageFromURL(imgaeUrl);
        console.log(filteredImage);
        return filteredImage;
        feedModel.getFeed();
    };

   async update(){

   };
};

export const feed: FeedItem = new FeedItem();