"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv-safe/config");
const express_1 = __importDefault(require("express"));
const test_1 = __importDefault(require("./routes/test"));
const Airbrake = require('@airbrake/node');
const airbrakeExpress = require('@airbrake/node/dist/instrumentation/express');
const airbrake = new Airbrake.Notifier({
    projectId: process.env.AIRBRAKE_PROJECT_ID,
    projectKey: process.env.AIRBRAKE_PROJECT_KEY,
});
const PORT = process.env.PORT || 5000;
const main = () => {
    const app = (0, express_1.default)();
    app.use(airbrakeExpress.makeMiddleware(airbrake));
    app.use('/', test_1.default);
    app.use(airbrakeExpress.makeErrorHandler(airbrake));
    app.listen(PORT, () => {
        console.log(`Server ready at http://localhost:${PORT}`);
    });
};
main();
//# sourceMappingURL=index.js.map