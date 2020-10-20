/**
 * Database module.
 * @file Database Provider
 * @module processor/database/module
 * @author Abel Tran <https://github.com/abel3t>
 */

import { Module, Global } from '@nestjs/common';
import { databaseProviders } from './database.provider';

@Global()
@Module({
  providers: [ ...databaseProviders ],
  exports: [ ...databaseProviders ],
})

export class DatabaseModule {
}
