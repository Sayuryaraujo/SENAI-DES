const mysql = require("mysql2/promise");

const con = mysql.createPool({
    host: "localhost",
    user: "root",
    pssaword: "",
    database: "teste"
});

module.exports = con;