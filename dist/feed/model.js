"use strict";
// import { Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, ForeignKey } from 'sequelize-typescript';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedModel = void 0;
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
const model_1 = require("../core/model");
class FeedModel extends model_1.Model {
    getFeed() {
        return __awaiter(this, void 0, void 0, function* () {
            return "";
        });
    }
    ;
}
;
exports.feedModel = new FeedModel();
//# sourceMappingURL=model.js.map