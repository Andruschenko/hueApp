import submitHandler from './submitHandler';
import CONFIG from './config';

export default {
  url: CONFIG.url,
  submit: submitHandler,
};
