/**
 * Database providers.
 * @file Database Provider
 * @module processor/database/providers
 * @author Abel Tran <https://github.com/abel3t>
 */

import mongoose from 'mongoose';
import { DB_NAME } from 'Constants/database';

export const databaseProviders = [
  {
    provide: DB_NAME,
    useFactory: async (): Promise<typeof mongoose> => {
      let reconnectionTask: NodeJS.Timeout | null = null;
      const RECONNECT_INTERVAL = 6000;

      function connection() {
        return mongoose.connect(process.env.MONGO_URL || '', {
          useUnifiedTopology: true,
          useCreateIndex: true,
          useNewUrlParser: true,
          useFindAndModify: false,
          promiseLibrary: global.Promise
        });
      }

      mongoose.connection.on('connecting', () => {
        console.log('Connecting...');
      });

      mongoose.connection.on('open', () => {
        console.info('Database is connected！');
        if (reconnectionTask) {
          clearTimeout(reconnectionTask);
        }
        reconnectionTask = null;
      });

      mongoose.connection.on('disconnected', () => {
        console.error(`Database is disconnected! Trying... ${RECONNECT_INTERVAL / 1000}s`);
        reconnectionTask = setTimeout(connection, RECONNECT_INTERVAL);
      });

      mongoose.connection.on('error', error => {
        console.error('Connecting Error！', error);
      });

      return await connection();
    }
  }
];
