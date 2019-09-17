import { Router, Response, Request } from 'express';
import links from './../config/staticLinks';

import { AuthRoute } from './AuthRoute';
import { BasedRoutes } from './BasedRoutes';
import { DataSourceRoute } from './DataSourceRoute';

export class IndexRoute extends BasedRoutes {
    public setRoute(): any {
        const router: Router = Router();

        router.use(new AuthRoute(links.endpointType.auth).setRoute());
        router.use(new DataSourceRoute(links.endpointType.sources).setRoute());
        return router;
    }
}
