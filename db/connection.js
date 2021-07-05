const mysql = require("mysql2");

//connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        //your mysql user
        user: "root",
        //your mysql pass
        password: "Ultimate8!",
        database: "election"
    },
);

module.exports = db;