import * as React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import i_reducer from 'src/interface/reducer';

export default () => {
  const state = useSelector(state => state) as i_reducer;
  const { str } = useRouter().query as { str: string };

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
            検索
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {str}
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {state.home.count}件
          </li>
        </ol>
      </nav>
    </>
  );
};
