export default class {
  static readonly bearer = 'Bearer abc';

  static readonly origin = {
    development: `http://localhost:8080`,
    production: [],
  };

  static readonly route = '/api/v1';

  constructor() {
    throw new Error('new禁止');
  }
}
