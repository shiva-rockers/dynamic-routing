/* eslint-disable no-console */

const log = (prefix, ...args) => console.log(`${prefix.toUpperCase()}::`, ...args);
const error = (prefix, ...args) => console.error(`${prefix.toUpperCase()}::`, ...args);
const warn = (prefix, ...args) => console.warn(`${prefix.toUpperCase()}::`, ...args);

export const logger = (prefix) => ({
    log: log.bind(null, prefix),
    error: error.bind(null, prefix),
    warn: warn.bind(null, prefix)
});