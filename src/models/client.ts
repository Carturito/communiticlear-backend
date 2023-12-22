import { DataTypes } from 'sequelize';
import db from '../db/connection';
import { updateClient } from '../controllers/client';

const Client = db.define('Client', {

    rut: {
        type: DataTypes.STRING
    },
    first_name: {
        type: DataTypes.STRING
    },
    paternal_lastname: {
        type: DataTypes.STRING
    },
    maternal_lastname: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    level: {
        type: DataTypes.NUMBER
    },
    email: {
        type: DataTypes.STRING
    },
    mobile_number: {
        type: DataTypes.STRING
    },
    assessment_rate: {
        type: DataTypes.DOUBLE
    }
}, {
    createdAt: false,
    updatedAt: false
})

export default Client;