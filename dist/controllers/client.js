"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClient = exports.postClient = exports.deleteClient = exports.getClient = exports.getClients = void 0;
const client_1 = __importDefault(require("../models/client"));
const getClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listClients = yield client_1.default.findAll();
    res.json(listClients);
});
exports.getClients = getClients;
const getClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const client = yield client_1.default.findByPk(id);
    if (client) {
        res.json(client);
    }
    else {
        res.status(404).json({
            msg: `No existe un cliente con el id ${id}`
        });
    }
});
exports.getClient = getClient;
const deleteClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const client = yield client_1.default.findByPk(id);
    if (!client) {
        res.status(404).json({
            msg: `No existe un cliente con el id ${id}`
        });
    }
    else {
        yield client.destroy();
        res.json({
            msg: 'El cliente fue eliminado con éxito!'
        });
    }
});
exports.deleteClient = deleteClient;
const postClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield client_1.default.create(body);
        res.json({
            msg: 'El cliente fue agregado con éxito!'
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ups, ocurrió un error, comuniquese con soporte'
        });
    }
});
exports.postClient = postClient;
const updateClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const client = yield client_1.default.findByPk(id);
        if (client) {
            yield client.update(body);
            res.json({
                msg: 'El cliente fue actualizado con éxito!'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un cliente con el id ${id}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Ups, ocurrió un error, comuniquese con soporte'
        });
    }
});
exports.updateClient = updateClient;
