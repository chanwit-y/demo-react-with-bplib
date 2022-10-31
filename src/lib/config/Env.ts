// Define type of environments
interface IProcessEnv {
  NODE_ENV: string;
  REACT_APP_BASE_NAME: string;
  REACT_APP_API_ENDPOINT: string;
  REACT_APP_IMAGE_ROOT: string;
  REACT_APP_EDITOR_API_KEY: string;
}

declare namespace process {
  let env: IProcessEnv;
}

let envSource = process.env;

if ((window as any)._env != null) {
  // window.env is set only from env-override.js which is generated inside docker startup.
  // local run won't have this property initialized.

  envSource = (window as any)._env;
}

/* Get constants from environment variables.
 * Values are configured in .env (for development) and .env.production (for staging and production)
 */
const {
  NODE_ENV,
  REACT_APP_BASE_NAME,
  REACT_APP_API_ENDPOINT,
  REACT_APP_IMAGE_ROOT,
  REACT_APP_EDITOR_API_KEY,
} = envSource;

export default {
  NODE_ENV,
  BASE_NAME: REACT_APP_BASE_NAME ?? "",
  API_ENDPOINT: REACT_APP_API_ENDPOINT ?? "",
  IMAGE_ROOT: REACT_APP_IMAGE_ROOT ?? "",
  EDITOR_API_KEY: REACT_APP_EDITOR_API_KEY ?? "",
};
