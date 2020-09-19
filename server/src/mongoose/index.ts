process.env.TZ = 'Asia/Tokyo';

import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

export const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.MONGODB as string, {
  useNewUrlParser: true,
});
