import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  loggers: {};

  constructor() {
    this.loggers = {};
  }

  getLogger(name?: string): Logger{
    if (!name) {
      name = 'default';
    }
    let logger = this.loggers[name];
    if (!logger) {
      logger = new Logger(name);
      this.loggers[name] = logger;
    }
    return logger;
  }
}
