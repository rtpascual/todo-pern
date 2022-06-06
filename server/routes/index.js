const todo = require("./todo");

module.exports = (app) => {
  app.use("/todos", todo);
};
