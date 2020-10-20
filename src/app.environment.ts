import dotenv from 'dotenv';

import * as ENV from 'Constants/evironment';

dotenv.config();

export const environment = process.env.NODE_ENV;
export const isDevMode = Object.is(environment, ENV.DEVELOPMENT);
export const isProdMode = Object.is(environment, ENV.PRODUCTION);
export const isTestMode = Object.is(environment, ENV.TEST);

export default {
  isDevMode,
  isProdMode,
  isTestMode,
  environment,
};