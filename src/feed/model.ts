// import { Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, ForeignKey } from 'sequelize-typescript';

// @Table
// export class FeedItem extends Model<FeedItem> {
//     @Column
//     public caption!: string;

//     @Column
//     public url!: string;

//     @Column
//     @CreatedAt
//     public createdAt: Date = new Date();

//     @Column
//     @UpdatedAt
//     public updatedAt: Date = new Date();
// }

import {Model} from '../core/model';

class FeedModel extends Model {

    async getFeed() {
        return ""
    };
};

export const feedModel: FeedModel = new FeedModel();
