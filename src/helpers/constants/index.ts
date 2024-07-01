/**
 * Base URL for API
 */
export const API_BASE = process.env.NEXT_PUBLIC_BASE_URL;

/**
 * z-index: 9999
 */
export const FULL_Z_INDEX = 9999;

/**
 * duration toast 5 seconds
 */
export const DURATION_TOAST = 5000; // 5 seconds

/**
 * duration request 10 seconds
 */
export const TIMEOUT_REQUEST = 10000; // 10 seconds

/**
 * duration inactive session 1 hour
 */
export const INACTIVE_SESSION_TIME = (Date.now() + 60 * 60 * 1000).toString(); // 1 hour

/**
 * age session 1 hour
 */
export const AGE_SESSION = 60 * 60; // 1 hour

/**
 * update age session 5 minutes
 */
export const UPDATE_AGE_SESSION = 300; // 5 minutes

/**
 * default language
 */
export const DEFAULT_LANGUAGE = "pt-br";

/**
 * cookie session name
 */
export const COOKIE_SESSION_NAME = "next-auth.session-token";

/**
 * cookie auth name
 */
export const COOKIE_AUTH_NAME = "__parse_token_job_token";

/**
 * application in development
 */
const dev = process.env.NODE_ENV !== "production";

/**
 * Secret key for JWT
 */
export const secretKey = process.env.NEXTAUTH_SECRET!;

/**
 * cookie userLogged
 */
export const COOKIE_USER_LOGGED = "__user_login";

/**
 * Error Login
 */
export const ERROR_LOGIN = "error-login";

/**
 * Success Login
 */
export const SUCCESS_LOGIN = "success-login";
