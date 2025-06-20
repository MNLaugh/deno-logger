/**
 * Enum representing ANSI escape codes for terminal colors and styles.
 * Used to colorize and style console output.
 */
export enum Colors {
  Reset = "\x1b[0m",
  Bright = "\x1b[1m",
  Dim = "\x1b[2m",
  Italic = "\x1b[3m",
  Underscore = "\x1b[4m",
  Blink = "\x1b[5m",
  Reverse = "\x1b[7m",
  Hidden = "\x1b[8m",
    
  FgBlack = "\x1b[30m",
  FgRed = "\x1b[31m",
  FgGreen = "\x1b[32m",
  FgYellow = "\x1b[33m",
  FgBlue = "\x1b[34m",
  FgMagenta = "\x1b[35m",
  FgCyan = "\x1b[36m",
  FgWhite = "\x1b[37m",
    
  BgBlack = "\x1b[40m",
  BgRed = "\x1b[41m",
  BgGreen = "\x1b[42m",
  BgYellow = "\x1b[43m",
  BgBlue = "\x1b[44m",
  BgMagenta = "\x1b[45m",
  BgCyan = "\x1b[46m",
  BgWhite = "\x1b[47m",

  FgLiteBlack = "\x1b[90m",
  FgLiteRed = "\x1b[91m",
  FgLiteGreen = "\x1b[92m",
  FgLiteYellow = "\x1b[93m",
  FgLiteBlue = "\x1b[94m",
  FgLiteMagenta = "\x1b[95m",
  FgLiteCyan = "\x1b[96m",
  FgLiteWhite = "\x1b[97m",

  BgLiteBlack = "\x1b[100m",
  BgLiteRed = "\x1b[101m",
  BgLiteGreen = "\x1b[102m",
  BgLiteYellow = "\x1b[103m",
  BgLiteBlue = "\x1b[104m",
  BgLiteMagenta = "\x1b[105m",
  BgLiteCyan = "\x1b[106m",
  BgLiteWhite = "\x1b[107m",
}

/**
 * Configuration options for the Logger instance.
 */
export interface LoggerOptions {
  /**
   * Optional prefix to add before each log message.
   * Can be a string or null to disable prefix.
   */
  prefix?: string | null;

  /**
   * Whether to colorize the output using ANSI escape codes.
   * Defaults to true.
   */
  colorize?: boolean;

  /**
   * Optional string to prepend before each log line.
   */
  preLine?: string;

  /**
   * The color to use for the log messages.
   * Should correspond to one of the values in `Colors` enum.
   */
  color?: string;
}