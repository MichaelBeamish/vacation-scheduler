const knex = require("../db/knex.js");
const hasher = require("../config/hasher");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "secret";

module.exports = {
  create: (req, res) => {
    hasher.hash(req.body).then(user => {
      knex("users")
        .insert(
          {
            email: user.email,
            password: user.password,
            first_name: user.first_name,
            last_name: user.last_name,
            alias: user.alias,
            roll: user.roll,
            phone: user.phone
          },
          "id"
        )
        .then(results => {
          res.json({
            message: "Regristration successful.",
            id: results[0]
          });
        })
        .catch(err => {
          res.status(400).send({ message: err });
        });
    });
  },

  login: (req, res) => {
    knex("users")
      .where("email", req.body.email)
      .first()
      .then(user => {
        if (user) {
          hasher.check(user, req.body).then(isMatch => {
            if (isMatch) {
              const token = jwt.sign(user, secret);
              delete user.password;
              res.json({ message: "Sign-in successful.", token, user });
            } else {
              res.status(400).send({ message: "Invalid email or password." });
            }
          });
        } else {
          res.status(400).send({ message: "Invalid email or password." });
        }
      })
      .catch(err => {
        res.status(400).send({ message: "Invalid email or password." });
      });
  },

  verify: (req, res) => {
    res.json(req.decoded);
  }
};
