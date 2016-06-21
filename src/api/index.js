import submitHandler from './submitHandler';
import { localUrl, baseUrl } from './config';

export const url = baseUrl;

export default {
  url: baseUrl,
  submit: submitHandler,
};
