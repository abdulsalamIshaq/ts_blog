import { Sequelize, Dialect } from "sequelize";

const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;


const db = new Sequelize({
    dialect: "mysql",
    host: DB_HOST,
    username: "root",
    password: "1234",
    database: "ts_blog",
    logging: false,
    port: 3306,
    // models: [Dog],
});

export default db;