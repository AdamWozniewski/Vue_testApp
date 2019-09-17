import { Router } from 'express';
import links from './../config/staticLinks';
import { BasedRoutes } from './BasedRoutes';
import { postPersonLoginResponse } from './../controllers/authController';

export class AuthRoute extends BasedRoutes {
  public  setRoute (): Router {
    const router: Router = Router();
    router.post(
        `${this.nameOfPath}${links.endpointType.actions.login}`,
        postPersonLoginResponse,
    );

    return router;
  }
}
