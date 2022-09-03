import { isProduction } from './config';

export const REFRESH_TOKEN_COOKIE_OPTION = {
  ...(isProduction ? { domain: process.env.SERVICE_DOMAIN } : {}),
  httpOnly: isProduction,
  secure: isProduction,
  maxAge: 2592000000,
};

export const REFRESH_TOKEN_COOKIE_KEY = 'Refresh';
