import { NextFunction, Request, Response } from "express";
import fs from 'fs';
import path from "path";

const LOG_DIR = process.env.LOG_DIR || './logs'

function Log(logFormat = 'simples') {
  return (req: Request, res: Response, next: NextFunction) => {
    const now = new Date().toISOString();
    const url = req.url;
    const method = req.method;
    let logMessage = `[${now}] ${method} ${url}`;

    if (logFormat === 'completo') {
      const httpVersion = `HTTP/${req.httpVersion}`;
      const userAgent = req.headers['user-agent'];
      logMessage += ` ${httpVersion} ${userAgent}`;
    }

    // Salva o log em um arquivo, com um arquivo por dia
    const logFileName = path.join(LOG_DIR, `access-${now.split('T')[0]}.log`);
    fs.appendFileSync(logFileName, logMessage + '\n');

    next();
  }
}

export default Log;