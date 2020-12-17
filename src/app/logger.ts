import * as dayjs from 'dayjs';

export class Logger {

    name: string;
    logs: string[];
    maxLength: number;

    constructor(_name: string, _maxLength?: number) {
        this.name = _name;
        this.maxLength = _maxLength ? _maxLength : 50;
        this.logs = [];
    }

    log(val: string) {
        const log = `${dayjs().format()} : ${val}`;
        this.logs.unshift(log);
        if (this.logs.length > this.maxLength) {
          this.logs.shift();
        }
        console.log(log);
      }
    
      getLogs(): string[] {
        return this.logs;
      }
}
