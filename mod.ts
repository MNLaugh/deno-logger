import { Colors, type LoggerOptions } from "./types.ts";

/**
 * Logger class providing simple colored logging with multiple levels.
 *
 * Supports customizable prefixes, color output, and line prefixes.
 */
export class Logger {
  private options: LoggerOptions;

  /**
   * Creates a new Logger instance.
   *
   * @param options - Configuration options for the logger.
   * - `prefix` (optional): String to prepend to every log message.
   * - `colorize` (optional, default: true): Whether to use ANSI colors.
   * - `preLine` (optional, default: "  "): String to prepend before each log line.
   * - `color` (optional): Override the log message color.
   */
  constructor(options: LoggerOptions = {}) {
    if (options.colorize === undefined) options.colorize = true;
    if (options.preLine === undefined) options.preLine = "  ";
    this.options = options;
  }

  /**
   * Static factory method to create a new Logger instance.
   * @param options Logger configuration options.
   * @returns A new Logger instance.
   */
  static create(options: LoggerOptions): Logger {
    return new Logger(options);
  }

  /**
   * Logs a generic message in default white color.
   * @param args - Values or objects to log.
   */
  // deno-lint-ignore no-explicit-any
  log(...args: any): void {
    const options = Object.assign({}, this.options, { color: Colors.FgWhite });
    this.handle(options, ...args);
  }

  /**
   * Logs a success message in light green color.
   * @param args - Values or objects to log.
   */
  // deno-lint-ignore no-explicit-any
  success(...args: any): void {
    const options = Object.assign({}, this.options, {
      color: Colors.FgLiteGreen,
    });
    this.handle(options, ...args);
  }

  /**
   * Logs an informational message in light blue color.
   * @param args - Values or objects to log.
   */
  // deno-lint-ignore no-explicit-any
  info(...args: any): void {
    const options = Object.assign({}, this.options, {
      color: Colors.FgLiteBlue,
    });
    this.handle(options, ...args);
  }

  /**
   * Logs a warning message in light yellow color.
   * @param args - Values or objects to log.
   */
  // deno-lint-ignore no-explicit-any
  warn(...args: any): void {
    const options = Object.assign({}, this.options, {
      color: Colors.FgLiteYellow,
    });
    this.handle(options, ...args);
  }

  /**
   * Logs an error message in light red color.
   * @param args - Values or objects to log.
   */
  // deno-lint-ignore no-explicit-any
  error(...args: any): void {
    const options = Object.assign({}, this.options, {
      color: Colors.FgLiteRed,
    });
    this.handle(options, ...args);
  }

  /**
   * Logs a debug message in light magenta color.
   * @param args - Values or objects to log.
   */
  // deno-lint-ignore no-explicit-any
  debug(...args: any): void {
    const options = Object.assign({}, this.options, {
      color: Colors.FgLiteMagenta,
    });
    this.handle(options, ...args);
  }

  /**
   * Handles the actual logging output to the console.
   * Applies colors, prefixes, and formats arguments.
   *
   * @param options Logger options including color and prefix.
   * @param args The list of arguments to log.
   */
  // deno-lint-ignore no-explicit-any
  private handle(options: LoggerOptions, ...args: any): void {
    console.log(
      this.options.colorize ? Colors.FgLiteCyan : "",
      `[${new Date().toISOString()}]`,
      this.options.colorize ? options.color : "",
      options.prefix ?? "",
      args
        // deno-lint-ignore no-explicit-any
        .map((arg: any) => {
          if (typeof arg === "string" || typeof arg === "number") return arg;
          if (arg instanceof Error) return arg.stack ?? arg.message;
          if (Array.isArray(arg)) return arg.toString();
          if (typeof arg === "object") return JSON.stringify(arg);
          return String(arg);
        })
        .join(" "),
      this.options.colorize ? Colors.Reset : "",
    );
  }
}

export default Logger;
