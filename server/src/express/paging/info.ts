import * as Express from 'express';

import { info } from '../../mongoose/collection/rooms';

interface i_request extends Express.Request {
  params: {
    num: string;
  };
}

export default async (req: i_request, res: Express.Response) => {
  try {
    res.send(
      await info({
        num: Number(req.params.num) - 1,
      })
    );
  } catch (e) {
    res.sendStatus(500);
  }
};
