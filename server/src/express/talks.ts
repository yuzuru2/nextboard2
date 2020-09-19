import * as Express from 'express';

import { select } from '../mongoose/collection/talks';

interface i_request extends Express.Request {
  params: {
    id: string;
    num: string;
  };
}

export default async (req: i_request, res: Express.Response) => {
  try {
    res.send(
      await select({
        roomId: req.params.id,
        num: Number(req.params.num) - 1,
      })
    );
  } catch (e) {
    res.sendStatus(500);
  }
};
