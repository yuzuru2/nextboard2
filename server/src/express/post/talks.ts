import * as Express from 'express';
import * as mongoose from 'mongoose';

import { update, exist_check } from '../../mongoose/collection/rooms';
import { insert } from '../../mongoose/collection/talks';

interface i_request extends Express.Request {
  body: {
    roomId: string;
    name: string;
    message: string;
  };
}

export default async (req: i_request, res: Express.Response) => {
  try {
    // 板が存在するか
    if (!(await exist_check(String(req.body.roomId)))) {
      res.sendStatus(500);
      return;
    }

    await insert({
      talkId: String(new mongoose.mongo.ObjectId()),
      roomId: String(req.body.roomId),
      name: String(req.body.name),
      message: String(req.body.message),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await update({ id: String(req.body.roomId) });

    res.send({});
  } catch (e) {
    res.sendStatus(500);
  }
};
