import { cleanEnv, port, str, url } from 'envalid';

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    LOG_DIR: str(),
    DATABASE_URL: url() ,
  });
};

export default validateEnv;
