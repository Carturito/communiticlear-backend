import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('communiclear', 'root', '52585258', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;