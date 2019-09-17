import { Response, Request } from 'express';
import data from '../fakeDataBaseValues/data';

export function getDataSource(req: Request, res: Response): Response {
    return res.send(data);
}
