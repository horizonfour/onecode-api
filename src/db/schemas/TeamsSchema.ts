import mongoose from './../mongoose';
const { Schema } = mongoose;
/**
 * Schema usuários no banco.
 */

const teamsSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  description: {
    type: String,
  },
  coordenatorId: {
    required: true,
    type: String,
  },
  membersId: {
    required: true,
    type: Array,
  },
  searchId: {
    required: true,
    type: String,
  },
  meta: {
    required: true,
    type: Number,
  },
  progress: {
    required: true,
    type: Number,
  },
});

export default mongoose.model('Teams', teamsSchema);
