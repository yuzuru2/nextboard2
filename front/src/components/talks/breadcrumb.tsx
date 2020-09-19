import * as React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import i_reducer from 'src/interface/reducer';

export default () => {
  const state = useSelector(state => state) as i_reducer;

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
            トーク
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {state.talk.count}件
          </li>
        </ol>
      </nav>
    </>
  );
};
