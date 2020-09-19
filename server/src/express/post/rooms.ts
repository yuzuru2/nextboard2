import * as Express from 'express';
import * as mongoose from 'mongoose';

import { insert } from '../../mongoose/collection/rooms';

interface i_request extends Express.Request {
  body: {
    name: string;
    genreId: number;
  };
}

export default async (req: i_request, res: Express.Response) => {
  try {
    const _ret = await insert({
      id: String(new mongoose.mongo.ObjectId()),
      name: String(req.body.name),
      genreId: Number(req.body.genreId),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.send({ id: _ret[0].id });
  } catch (e) {
    res.sendStatus(500);
  }
};
