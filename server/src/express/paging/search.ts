import * as Express from 'express';

import { search } from '../../mongoose/collection/rooms';

interface i_request extends Express.Request {
  params: {
    str: string;
    num: string;
  };
}

export default async (req: i_request, res: Express.Response) => {
  try {
    res.send(
      await search({
        name: req.params.str,
        num: Number(req.params.num) - 1,
      })
    );
  } catch (e) {
    res.sendStatus(500);
  }
};
