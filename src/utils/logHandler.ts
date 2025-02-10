/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
import { createLogger, format, transports, config } from "winston";

const { combine, timestamp, colorize, printf } = format;

/**
 * Standard log handler, using winston to wrap and format
 * messages. Call with `logHandler.log(level, message)`.
 * @param {string} level - The log level to use.
 * @param {string} message - The message to log.
 */
export const logHandler = createLogger({
  exitOnError: false,
  format:      combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    colorize(),
    printf((info) => {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- Winston properties...
      return `${info.level}: ${info.timestamp}: ${info.message}`;
    }),
  ),
  level:      "silly",
  levels:     config.npm.levels,
  transports: [ new transports.Console() ],
});
