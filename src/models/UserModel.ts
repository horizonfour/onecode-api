import * as mongoose from 'mongoose';
/**
 * Schema usuários no banco.
 */

const user = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  name: String,
});

export default user;
