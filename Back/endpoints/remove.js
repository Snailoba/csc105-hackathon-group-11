const { check, validationResult } = require("express-validator");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_14smdo",
  password: "fGQknR3J6Mln2E1Y",
  database: "lab_blank01_143kapi",
});

module.exports = [
  async (req, res) => {
    const id = req.query.id;

    console.log(`Id ${id}`);
    connection.query(`DELETE FROM testing WHERE id = ?`, [id], (err, rows) => {
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        if (rows) {
          res.json({
            success: true,
            data: {
              message: "Deleted event successfully",
            },
          });
        }
      }
    });
  },
];
