import * as mongoose from 'mongoose';

import { Schema } from '../index';

const name = 'rooms';

// interface
interface i_collection extends mongoose.Document {
  id: string;
  name: string;
  genreId: number;
  createdAt: Date;
  updatedAt: Date;
}

const collection = mongoose.model(
  name,
  new Schema({
    id: { type: String },
    name: { type: String, minlength: 1, maxlength: 50 },
    genreId: {
      type: Number,
      min: 0,
      max: 17,
      validate: {
        validator: (v: string) => {
          if (!Number.isInteger(v)) {
            return false;
          }
          return true;
        },
      },
    },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  }).index({ id: 1 }, { unique: true })
);

const paging_list = (num: number) => {
  return [
    {
      $lookup: {
        from: 'talks',
        localField: 'id',
        foreignField: 'roomId',
        as: 'talk_info',
      },
    },
    {
      $sort: { updatedAt: -1 },
    },
    {
      $skip: num * 10,
    },
    { $limit: 10 },
    {
      $project: {
        id: '$id',
        name: '$name',
        genreId: '$genreId',
        updatedAt: '$updatedAt',
        count: { $size: '$talk_info.message' },
      },
    },
  ];
};

type t_paging = {
  id: string;
  name: string;
  genreId: string;
  updatedAt: Date;
  count: number;
}[];

// 板作成
export const insert = async (
  params: Pick<
    i_collection,
    'id' | 'name' | 'genreId' | 'createdAt' | 'updatedAt'
  >
) => {
  return (await collection.insertMany([params])) as i_collection[];
};

// 更新
export const update = async (params: Pick<i_collection, 'id'>) => {
  await collection.updateOne({ id: params.id } as Pick<i_collection, 'id'>, {
    $set: { updatedAt: new Date() } as Pick<i_collection, 'updatedAt'>,
  });
};

// roomsが存在するか
export const exist_check = async (id: string) => {
  const _ret = await collection.find({ id: id });
  if (_ret.length === 0) {
    return false;
  }

  return true;
};

// トップ
export const info = async (params: { num: number }) => {
  return {
    list: (await collection.aggregate([
      ...paging_list(params.num),
    ])) as t_paging,
    count: await collection.find({}).countDocuments(),
  };
};

// 検索
export const search = async (
  params: {
    num: number;
  } & Pick<i_collection, 'name'>
) => {
  return {
    list: (await collection.aggregate([
      {
        $match: {
          name: { $regex: params.name },
        },
      },
      ...paging_list(params.num),
    ])) as t_paging,
    count: await collection
      .find({ name: { $regex: params.name } })
      .countDocuments(),
  };
};

// ジャンル
export const genre = async (
  params: {
    num: number;
  } & Pick<i_collection, 'genreId'>
) => {
  return {
    list: (await collection.aggregate([
      {
        $match: {
          genreId: params.genreId,
        },
      },
      ...paging_list(params.num),
    ])) as t_paging,
    count: await collection.find({ genreId: params.genreId }).countDocuments(),
  };
};
