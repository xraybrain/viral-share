"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const ISSUER = "PlotterWave";
const SECRET = "ashsjhdsdkiewueiwiuewe7832783723wyudwe";
const AUDIENCE = "Viral Client";
const signToken = (payload) => {
    return (0, jsonwebtoken_1.sign)(payload, SECRET, { issuer: ISSUER, audience: AUDIENCE });
};
exports.signToken = signToken;
