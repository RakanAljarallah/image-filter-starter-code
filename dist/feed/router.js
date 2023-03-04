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
exports.feedRouter = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const service_1 = require("./service");
const util_1 = require("../util/util");
const router = (0, express_1.Router)();
// Get all feed items
router.get('/filteredimage', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, util_1.clearFiles)();
    const { image_url } = req.query;
    if (!image_url) {
        return res.status(401).send("File url is required");
    }
    ;
    if (!service_1.feedService.isValidImageUrl(image_url.toString())) {
        return res.status(400).send({ message: 'File url is required' });
    }
    ;
    const filteredImage = yield controller_1.feed.filterImage(image_url.toString());
    if (!filteredImage) {
        return res.status(500).send("");
    }
    ;
    res.status(200).sendFile(filteredImage);
}));
exports.feedRouter = router;
//# sourceMappingURL=router.js.map