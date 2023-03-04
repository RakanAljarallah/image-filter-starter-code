"use strict";
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
exports.feed = void 0;
const Controller_1 = require("../core/Controller");
const model_1 = require("./model");
const util_1 = require("../util/util");
class FeedItem extends Controller_1.Controller {
    constructor() {
        super();
        this.feedModel = model_1.feedModel;
    }
    ;
    filterImage(imgaeUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const filteredImage = yield (0, util_1.filterImageFromURL)(imgaeUrl);
            console.log(filteredImage);
            return filteredImage;
            model_1.feedModel.getFeed();
        });
    }
    ;
    update() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    ;
}
;
exports.feed = new FeedItem();
//# sourceMappingURL=controller.js.map