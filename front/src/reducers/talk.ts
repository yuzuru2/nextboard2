import { Dispatch } from 'redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import i_reducer from 'src/interface/reducer';
import Constant from 'src/constant';

const initialState: i_reducer['talk'] = {
  pagination: 1,
  count: 0,
  data: [],
  post: {
    name: '名無し',
    message: '',
  },
};

const slice = createSlice({
  name: 'talk',
  initialState,
  reducers: {
    pagination: (
      state: i_reducer['talk'],
      action: PayloadAction<i_reducer['talk']['pagination']>
    ) => {
      state.pagination = action.payload;
    },
    count: (
      state: i_reducer['talk'],
      action: PayloadAction<i_reducer['talk']['count']>
    ) => {
      state.count = action.payload;
    },
    data: (
      state: i_reducer['talk'],
      action: PayloadAction<i_reducer['talk']['data']>
    ) => {
      state.data = action.payload;
    },
    post_name: (
      state: i_reducer['talk'],
      action: PayloadAction<i_reducer['talk']['post']['name']>
    ) => {
      state.post.name = action.payload;
    },
    post_message: (
      state: i_reducer['talk'],
      action: PayloadAction<i_reducer['talk']['post']['message']>
    ) => {
      state.post.message = action.payload;
    },
  },
});

export default slice;

export const post = (params: {
  id: string;
  name: string;
  message: string;
}) => async (dispatch: Dispatch<any>) => {
  try {
    if (params.name.length === 0 || params.message.length === 0) {
      alert('なまえとメッセージを入力してください');
      return;
    }

    dispatch(slice.actions.post_message(''));

    const _res = await axios.post(
      `${
        Constant.request_url[
          process.env.NODE_ENV as 'development' | 'production'
        ]
      }/talks`,
      JSON.stringify({
        roomId: params.id,
        name: params.name,
        message: params.message,
      }),
      {
        headers: Constant.headers,
      }
    );

    if (_res.status !== 200) {
      alert('不正な値が送信されました');
      return;
    }

    location.reload();
  } catch (err) {}
};
