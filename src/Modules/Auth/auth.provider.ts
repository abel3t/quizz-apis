import { Connection } from 'mongoose';
import { UserSchema } from 'Processors/Schemas/User';
import { USER_MODEL, DB_NAME } from 'Constants/database';

export const userProviders = [
  {
    provide: USER_MODEL,
    useFactory: (connection: Connection) => connection.model('Users', UserSchema),
    inject: [ DB_NAME ],
  }
];