import * as Express from 'express';

import { genre } from '../../mongoose/collection/rooms';

interface i_request extends Express.Request {
  params: {
    id: string;
    num: string;
  };
}

export default async (req: i_request, res: Express.Response) => {
  try {
    res.send(
      await genre({
        genreId: Number(req.params.id),
        num: Number(req.params.num) - 1,
      })
    );
  } catch (e) {
    res.sendStatus(500);
  }
};
