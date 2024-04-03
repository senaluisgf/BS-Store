import { cleanEnv, num, port, str, url } from 'envalid';

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    ROUNDS: num(),
    LOG_DIR: str(),
    DATABASE_URL: url(),
    MYSQL_DATABASE: str(),
    MYSQL_ROOT_PASSWORD: str(),
    MYSQL_ROOT_USER: str(),
    MYSQL_ROOT_HOST: str(),
    SESSION_SECRET: str(),
    FRONTEND_URL: url(),
    BACKEND_PORT: port(),
  });
};

export default validateEnv;
