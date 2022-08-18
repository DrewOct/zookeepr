// const apiRoutes = require("./routes/apiRoutes");
// const htmlRoutes = require("./routes/htmlRoutes");
// const fs = require("fs");
// const path = require("path");
// const express = require("express");
// const { animals } = require("./data/animals");
// const PORT = process.env.PORT || 3006;
// const app = express();

// // parse incoming string or array data
// app.use(express.urlencoded({ extended: true }));
// // parse incoming JSON data
// app.use(express.json());
// app.use(express.static("public"));

// // use apiRoutes
// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);

// app.listen(PORT, () => {
//   console.log(`API server now on port ${PORT}!`);
// });

const express = require("express");

const PORT = process.env.PORT || 3006;
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Use apiRoutes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
