"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Validators {
    static isDomain(domain) {
        return /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(domain);
    }
}
exports.default = Validators;
