import { Dispatch } from 'redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import i_reducer from 'src/interface/reducer';
import Constant from 'src/constant';

const initialState: i_reducer['home'] = {
  pagination: 1,
  count: 0,
  data: [],
  post: {
    name: '',
    genreId: 0,
  },
};

const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    pagination: (
      state: i_reducer['home'],
      action: PayloadAction<i_reducer['home']['pagination']>
    ) => {
      state.pagination = action.payload;
    },
    count: (
      state: i_reducer['home'],
      action: PayloadAction<i_reducer['home']['count']>
    ) => {
      state.count = action.payload;
    },
    data: (
      state: i_reducer['home'],
      action: PayloadAction<i_reducer['home']['data']>
    ) => {
      state.data = action.payload;
    },
    post_name: (
      state: i_reducer['home'],
      action: PayloadAction<i_reducer['home']['post']['name']>
    ) => {
      state.post.name = action.payload;
    },
    post_genreId: (
      state: i_reducer['home'],
      action: PayloadAction<i_reducer['home']['post']['genreId']>
    ) => {
      state.post.genreId = action.payload;
    },
  },
});

export default slice;

export const post = (params: { name: string; genreId: number }) => async (
  dispatch: Dispatch<any>
) => {
  try {
    if (params.name.length === 0) {
      alert('板名を入力してください');
      return;
    }

    dispatch(slice.actions.post_name(''));

    const _res = await axios.post(
      `${
        Constant.request_url[
          process.env.NODE_ENV as 'development' | 'production'
        ]
      }/rooms`,
      JSON.stringify({
        name: params.name,
        genreId: params.genreId,
      }),
      {
        headers: Constant.headers,
      }
    );

    if (_res.status !== 200) {
      alert('不正な値が送信されました');
      return;
    }

    const _ret: { id: string } = _res.data;

    location.href = `/talks/${_ret.id}/1`;
  } catch (err) {}
};
