import mysql from "mysql2";

const db = mysql.createConnection({
  host: "db.cshack.site",
  user: "group11",
  port: "3306",
  password: "204238240",
  database: "group11",
});

export default db;
