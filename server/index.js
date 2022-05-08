const express = require("express");
const app = express();
const cors = require("cors");
const port =  4000;
const mainRoutes = require('./routes/member.js')
app.use(cors());
app.use(express.json());
app.use(require("./routes/member"));
app.use(require("./routes/workout"));
app.use(require("./routes/items"));

// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});