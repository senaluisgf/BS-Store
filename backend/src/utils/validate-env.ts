import { cleanEnv, num, port, str, url } from 'envalid';

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    ROUNDS: num(),
    LOG_DIR: str(),
    DATABASE_URL: url(),
    SESSION_SECRET: str(),
    MYSQL_ROOT_HOST: str(),
    MYSQL_DATABASE: str(),
    MYSQL_ROOT_PASSWORD: str(),
    MYSQL_LOCAL_PORT: port(),
    MYSQL_DOCKER_PORT: port(),
  });
};

export default validateEnv;
