import * as Express from 'express';
import * as Cors from 'cors';
import * as Helmet from 'helmet';

import Constant from './constant';

import info from './express/paging/info';
import genre from './express/paging/genre';
import search from './express/paging/search';
import talks from './express/talks';

import post_rooms from './express/post/rooms';
import post_talks from './express/post/talks';

const app = Express();

// サーバ情報隠蔽
app.disable('x-powered-by');

// セキュリティ対策
app.use(Helmet());

app.use(
  Cors({
    origin:
      Constant.origin[process.env.NODE_ENV as 'development' | 'production'],
  })
);

// postリクエスト使えるようにする
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// Bearerチェック
app.use(
  (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
    req.headers.authorization === Constant.bearer
      ? next()
      : res.sendStatus(401);
  }
);

// ミドルウエア　エラーハンドリング
app.use(
  async (
    err: Error,
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
  ) => {
    console.log(err);
    res.sendStatus(500);
  }
);

app.get(Constant.route + '/search/:str/:num', search);
app.get(Constant.route + '/genre/:id/:num', genre);
app.get(Constant.route + '/info/:num', info);

app.get(Constant.route + '/talks/:id/:num', talks);

app.post(Constant.route + '/rooms', post_rooms);
app.post(Constant.route + '/talks', post_talks);

app.listen(process.env.PORT || 3000);

export default app;
