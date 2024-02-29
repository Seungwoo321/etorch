"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const env = {
    get(key) {
        return process.env[key];
    },
    getInt(key) {
        return parseInt(process.env[key], 10);
    },
    getFloat(key) {
        return parseFloat(process.env[key]);
    },
    getBoolean(key) {
        return process.env[key].toLowerCase() === 'true';
    }
};
exports.config = {
    MARIADB_HOST: env.get('MARIADB_HOST'),
    MARIADB_DATABASE: env.get('MARIADB_DATABASE'),
    MARIADB_USERNAME: env.get('MARIADB_USERNAME'),
    MARIADB_PASSWORD: env.get('MARIADB_PASSWORD'),
    MARIADB_PORT: env.get('MARIADB_PORT')
};
//# sourceMappingURL=env.js.map