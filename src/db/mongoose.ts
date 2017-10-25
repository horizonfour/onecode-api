import mongoConfig from './mongoConfig';
import * as Mongoose from 'mongoose';

const mongoose = require('mongoose');

Mongoose.connect(mongoConfig.connection);
mongoose.Promise = global.Promise;

export default Mongoose;
