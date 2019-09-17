import { Response, Request } from 'express';
import { users } from './../fakeDataBaseValues/users';

export function postPersonLoginResponse(req: Request, res: Response): Response {
    // const user = users.find(user => user.login === req);
    console.log(req.body)
    return res.send({
        login: 'adam',
        password: 'xxx'
    });
}
