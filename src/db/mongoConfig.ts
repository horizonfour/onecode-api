const HOST = process.env.DB_MONGO_HOST || 'localhost';
const PORT = process.env.DB_MONGO_PORT || '27017';
const DATABASE = process.env.DB_MONGO_DATABASE || 'onecode';

const URI = `mongodb://${HOST}:${PORT}/${DATABASE}`;

export default {
  options: {
    useMongoClient: true,
  },
  connection: URI,
};
