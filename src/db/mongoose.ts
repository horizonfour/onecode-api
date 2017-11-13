import mongoConfig from './mongoConfig';
import * as Mongoose from 'mongoose';

const mongoose = require('mongoose');

// tslint:disable-next-line:ter-arrow-parens
Mongoose.connect(mongoConfig.connection, err => {
  if (err) console.log('Erro ao conectar com a base de dados: ' + err);
});

mongoose.Promise = global.Promise;

export default Mongoose;
