import {TRY_LOGIN} from '../Constant';

export const tryLogin = (response) => {
  console.log(response, 'response on action');
  return {type: TRY_LOGIN, payload: response};
};
