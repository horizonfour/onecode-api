import mongoose from './../mongoose';
/**
 * Schema usuários no banco.
 */

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
});

export default mongoose.model('User', userSchema);
