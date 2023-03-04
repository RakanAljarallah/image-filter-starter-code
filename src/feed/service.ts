
class FeedService {

    async isValidImageUrl(imageUrl: string)
    {
        if(!imageUrl)
        {
            return undefined;
        }
        return (imageUrl.match(/\.(jpeg|jpg|gif|png)$/) != null);
    };
};

export const feedService: FeedService = new FeedService();