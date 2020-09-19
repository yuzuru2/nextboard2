export default class {
  static readonly title = 'いつめん掲示板';

  static readonly headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer abc',
  };

  static readonly request_url = {
    development: 'http://localhost:3000/api/v1',
    production: ``,
  };

  static readonly genre = [
    '音楽・芸能',
    'ゲーム',
    'ネットゲーム',
    'コンピュータ',
    'インターネット',
    'スポーツ',
    '同人',
    '旅行',
    '学校',
    '映画',
    'アニメ',
    'マンガ',
    'ビジネス',
    '自動車',
    '学問',
    'ニュース',
    'ショッピング',
    'ラジオ',
  ];

  constructor() {
    throw new Error('new禁止');
  }
}
