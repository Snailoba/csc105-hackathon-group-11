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
    const id = req.body.id;

    console.log(`Title ${title}`);
    console.log(`Description ${description}`);
    console.log(`Id ${id}`);

    connection.query(
      "UPDATE testing SET title = ?, description = ? WHERE id = ?",
      [title, description, id],
      (err, rows) => {
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
                message: "Event updated successfully",
              },
            });
          }
        }
      }
    );
  },
];
