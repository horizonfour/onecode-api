import mongoose from './../config/mongoose';
/**
 * Schema usuários no banco.
 */

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
});

export default mongoose.model('User', userSchema);
