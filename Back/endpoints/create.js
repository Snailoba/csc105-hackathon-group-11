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
  check("titleInput").notEmpty().withMessage("title cannot be empty"),
  check("descriptionInput")
    .notEmpty()
    .withMessage("description cannot be empty"),
  async (req, res) => {
    const title = req.body.titleInput;
    const description = req.body.descriptionInput;

    console.log(`Title ${title}`);
    console.log(`Description ${description}`);
    try {
      connection.query(
        `INSERT INTO testing (title, description) VALUES (?,?)`,
        [title, description],
        (err, rows) => {
          if (err) {
            res.json({
              success: false,
              data: null,
              error: err.message,
            });
          } else {
            console.log(rows);
            if (rows) {
              res.json({
                success: true,
                data: {
                  message: "Event successfully created",
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
