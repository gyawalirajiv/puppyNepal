import * as Express from 'express';

import { settings } from 'settings';
import { initRoutes } from 'routes';
import {json} from "express";

export class Server {
    public app: Express.Application;
    public router: Express.Router;

    constructor() {
        this.app = Express();
        this.setConfig();
        this.setRoutes();
    }

    public start() {
        this.app.listen(settings.PORT, () => `Server started at ${settings.PORT}`);
    }

    private setConfig() {
        this.app.use('/', Express.static(settings.PUBLIC_PATH));
        this.app.use(json());
    }

    private setRoutes() {
        initRoutes(this.app);
    }
}
