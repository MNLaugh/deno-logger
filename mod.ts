import { Colors, LoggerOptions } from "./types.ts";

export class Logger {
  private options: LoggerOptions;
  constructor (options: LoggerOptions = {}) {
    if (options.colorize === undefined) options.colorize = true;
    if (options.preLine === undefined) options.preLine = "  ";
    this.options = options;
  }

  static create(options: LoggerOptions): Logger {
    return new Logger(options);
  }

  // deno-lint-ignore no-explicit-any
  log(...args: any): void {
    const options = Object.assign(this.options, { color: Colors.FgWhite });
    this.handle(options, ...args);
  }

  // deno-lint-ignore no-explicit-any
  success(...args: any): void {
    const options = Object.assign(this.options, { color: Colors.FgLiteGreen });
    this.handle(options, ...args);
  }

  // deno-lint-ignore no-explicit-any
  info(...args: any): void {
    const options = Object.assign(this.options, { color: Colors.FgLiteBlue });
    this.handle(options, ...args);
  }

  // deno-lint-ignore no-explicit-any
  warn(...args: any): void {
    const options = Object.assign(this.options, { color: Colors.FgLiteYellow });
    this.handle(options, ...args);
  }

  // deno-lint-ignore no-explicit-any
  error(...args: any): void {
    const options = Object.assign(this.options, { color: Colors.FgLiteRed });
    this.handle(options, ...args);
  }

  // deno-lint-ignore no-explicit-any
  debug(...args: any): void {
    const options = Object.assign(this.options, { color: Colors.FgLiteMagenta });
    this.handle(options, ...args);
  }

  // deno-lint-ignore no-explicit-any
  private handle(options: LoggerOptions, ...args: any): void {
    console.log(
      (this.options.colorize) ? Colors.FgLiteCyan : "",
      `[${new Date().toISOString()}]`,
      (this.options.colorize) ? options.color : "",
      options.prefix,
      // deno-lint-ignore no-explicit-any
      args.map((arg: any) => {
        return (typeof arg === "string" || typeof args === "number") ? arg
        : (arg instanceof Error) ? `${arg.stack}`
          : (arg instanceof Array) ? arg.toString()
            : (typeof arg === "object") ? JSON.stringify(arg)
              : arg;
      }).join(" "),
      (this.options.colorize) ? Colors.Reset : ""
    );
  }
}

export default Logger;
