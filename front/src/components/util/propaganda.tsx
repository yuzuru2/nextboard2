import * as React from 'react';

export default () => {
  return (
    <>
      <p className="text-center">管理人プロフィール</p>
      <div
        style={{
          width: '80%',
          margin: '0 auto',
        }}
      >
        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a href="https://qiita.com/yuzuru2/items/b5a34ad07d38ab1e7378">
                作成したサイト・アプリまとめ
              </a>
            </li>

            <li className="list-group-item">
              <a href="https://www.youtube.com/channel/UCuRrjmWcjASMgl5TqHS02AQ/videos">
                YouTube
              </a>
            </li>
            <li className="list-group-item">
              <a href="https://twitter.com/yuzuru_program">Twitter</a>
            </li>
            <li className="list-group-item">
              <a href="https://qiita.com/yuzuru2">Qiita</a>
            </li>

            <li className="list-group-item">
              <a href="https://line.me/ti/p/-GXpQkyXAm">LINE</a>
            </li>

            <li className="list-group-item">
              <a href="https://github.com/yuzuru2">GitHub</a>
            </li>
          </ul>
        </div>

        <hr />
        <p className="text-center">作成したサイト・アプリ</p>

        <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a href="https://nuxtchat.itsumen.com/">チャット(SSR)</a>
            </li>

            <li className="list-group-item">
              <a href="https://chat4.itsumen.com/">チャット(SPA)</a>
            </li>

            <li className="list-group-item">
              <a href="https://nextboard.itsumen.com/">掲示板(SSR)</a>
            </li>

            <li className="list-group-item">
              <a href="https://board.itsumen.com/">掲示板(SPA)</a>
            </li>

            <li className="list-group-item">
              <a href="https://gazou.itsumen.com/">画像共有サイト(SPA)</a>
            </li>

            <li className="list-group-item">
              <a href="https://code.itsumen.com/">
                ソースコード共有サイト(SPA)
              </a>
            </li>

            <li className="list-group-item">
              <a href="https://play.google.com/store/apps/details?id=com.itsumen.regi&hl=ja">
                レジの店員を呼ぶアプリ(Android)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
