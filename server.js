const express = require("express");
const app = express();

//routes
app.use(require("./routes/header"));

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
