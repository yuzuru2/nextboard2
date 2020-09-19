import * as React from 'react';
import Link from 'next/link';

import Constant from 'src/constant';

export default () => {
  return (
    <>
      <nav className="navbar navbar-light">
        <Link href="/">
          <a className="navbar-brand">{Constant.title}</a>
        </Link>

        {/* ハンバーガーボタン */}
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarList"
          aria-controls="navbarList"
          aria-expanded="false"
          aria-label="ナビゲーションの切替"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ナビゲーション */}
        <div
          className="collapse navbar-collapse"
          id="navbarList"
          style={{ zIndex: 2, textAlign: 'center' }}
        >
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            {Constant.genre.map((value, i) => {
              return (
                <li className="nav-item" key={i}>
                  <a href={`/genre/${i}/1`} className="nav-link">
                    {value}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};
