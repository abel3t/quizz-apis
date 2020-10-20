/**
 * HttpBadRequest error.
 * @file 400 Generator
 * @module error/bad-request
 * @author Abel Tran <https://github.com/abel3t>
 */

import { HttpException, HttpStatus } from '@nestjs/common';
import { BAD_REQUEST } from 'Constants/httpStatuses';

/**
 * @class HttpBadRequestError
 * @classdesc 400 -> Request is illegal
 * @example new HttpBadRequestError('Error message')
 * @example new HttpBadRequestError(new Error())
 */
export class HttpBadRequestError extends HttpException {
  constructor(error?: any) {
    super(error || BAD_REQUEST, HttpStatus.BAD_REQUEST);
  }
}
