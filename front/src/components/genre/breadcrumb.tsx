import * as React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import i_reducer from 'src/interface/reducer';
import Constant from 'src/constant';

export default () => {
  const state = useSelector(state => state) as i_reducer;
  const { id } = useRouter().query as { id: string };

  return (
    <>
      <nav aria-label="パンくずリスト">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>ホーム</a>
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            ジャンル
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {Constant.genre[Number(id)]}
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {state.home.count}件
          </li>
        </ol>
      </nav>
    </>
  );
};
