const port = process.env.MONGO_PORT || 27017;
const uri =
  process.env.MONGO_HOST || 'mongodb://localhost:' + port + '/conversador';

const options = {
  useMongoClient: true,
};

export default {
  options,
  connection: uri,
};
