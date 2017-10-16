// Set .env variables using DOTENV package
import * as dotenv from 'dotenv';

if (process.env.ENVIRONMENT !== 'PROD') {
  dotenv.config({ path: './config/.env.dev' });
} else {
  dotenv.config({ path: './config/.env.prod' });
}

import './app.js';
