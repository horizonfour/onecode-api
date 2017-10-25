import mongoose from './../mongoose';
/**
 * Schema usuários no banco.
 */

const userSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
});
// let a:.Model;

const a = mongoose.model('User', userSchema);
export default mongoose.model('User', userSchema);
