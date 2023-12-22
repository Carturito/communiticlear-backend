"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Client = connection_1.default.define('Client', {
    rut: {
        type: sequelize_1.DataTypes.STRING
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING
    },
    paternal_lastname: {
        type: sequelize_1.DataTypes.STRING
    },
    maternal_lastname: {
        type: sequelize_1.DataTypes.STRING
    },
    password: {
        type: sequelize_1.DataTypes.STRING
    },
    level: {
        type: sequelize_1.DataTypes.NUMBER
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    mobile_number: {
        type: sequelize_1.DataTypes.STRING
    },
    assessment_rate: {
        type: sequelize_1.DataTypes.DOUBLE
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Client;
