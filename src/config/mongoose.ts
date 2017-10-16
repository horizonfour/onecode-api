import * as mongoose from 'mongoose';
import mongoConfig from './mongoConfig';

mongoose.connect(mongoConfig.connection);

export default mongoose;
