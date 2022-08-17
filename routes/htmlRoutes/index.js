const path = require("path");
const router = require("express").Router();
const PORT = process.env.PORT || 3006;

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

router.get("/animals", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/animals.html"));
});

router.get("/zookeepers", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/zookeepers.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

router.get(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

module.exports = router;
