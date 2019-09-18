import { Response, Request } from 'express';
import { users } from './../fakeDataBaseValues/users';

export function postPersonLoginResponse(req: Request, res: Response): Response {
    const { body } = req;
    const user = users.find(({ login, password }) => login === body.login && password === body.password);

    if (user !== undefined) return res.send(user);
    res.status(400).send({
        message: 'This is an error!'
    });
}
