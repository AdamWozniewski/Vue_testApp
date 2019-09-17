import { Router } from 'express';
import links from './../config/staticLinks';
import { BasedRoutes } from './BasedRoutes';
import { getDataSource } from './../controllers/dataSourcesController';

export class DataSourceRoute extends BasedRoutes {
    public  setRoute (): Router {
        const router: Router = Router();
        router.get(
            `${this.nameOfPath}`,
            getDataSource,
        );

        return router;
    }
}
