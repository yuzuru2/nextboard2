import * as mongoose from 'mongoose';

import { Schema } from '../index';

const name = 'talks';

// interface
interface i_collection extends mongoose.Document {
  talkId: string;
  roomId: string;
  name: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const collection = mongoose.model(
  name,
  new Schema({
    talkId: { type: String },
    roomId: { type: String },
    name: { type: String, minlength: 1, maxlength: 15 },
    message: { type: String, minlength: 1, maxlength: 150 },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  }).index({ talkId: 1 }, { unique: true })
);

// 投稿
export const insert = async (
  params: Pick<
    i_collection,
    'talkId' | 'roomId' | 'name' | 'message' | 'createdAt' | 'updatedAt'
  >
) => {
  return (await collection.insertMany([params])) as i_collection[];
};

// 投稿一覧
export const select = async (
  params: {
    num: number;
  } & Pick<i_collection, 'roomId'>
) => {
  return {
    list: (await collection
      .find({ roomId: params.roomId })
      .sort({ updatedAt: 1 })
      .skip(params.num * 100)
      .limit(100)) as i_collection[],
    count: await collection.find({ roomId: params.roomId }).countDocuments(),
  };
};
