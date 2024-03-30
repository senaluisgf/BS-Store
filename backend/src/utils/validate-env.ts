import { cleanEnv, num, port, str, url } from 'envalid';

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    ROUNDS: num(),
    LOG_DIR: str(),
    DATABASE_URL: url(),
    SESSION_SECRET: str(),
    BACKEND_PORT: port(),
  });
};

export default validateEnv;
