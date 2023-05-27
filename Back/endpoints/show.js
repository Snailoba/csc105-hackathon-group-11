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
    const id = req.body.id;

    console.log(`Id ${id}`);
    try {
      connection.query(
        `SELECT * FROM testing WHERE id = ?`,
        [id],
        (err, rows) => {
          if (err) {
            res.json({
              success: false,
              data: null,
              error: err.message,
            });
          } else {
            console.log(rows);
            if (rows.length > 0) {
              res.json({
                success: true,
                data: {
                  message: "Event successfully fetched",
                },
              });
            } else {
              res.json({
                success: false,
                data: {
                  message: "Error: Event doesn't exist",
                },
              });
            }
          }
        }
      );
    } catch (e) {
      console.log(e);
      res.status(500).send("ERROR");
    }
  },
];
