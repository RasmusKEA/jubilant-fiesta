const express = require("express");
const fs = require("fs");
const yaml = require("js-yaml");
const path = require("path");

const app = express();
const filesDir = path.join(__dirname, "..", "files");

app.get("/yaml", (req, res) => {
  const file_path = path.join(filesDir, "data.yaml");
  try {
    const data = yaml.safeLoad(fs.readFileSync(file_path, "utf8"));
    res.json(data);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error reading YAML file");
  }
});

app.get("/txt", (req, res) => {
  const file_path = path.join(filesDir, "data.txt");
  try {
    const data = fs.readFileSync(file_path, "utf8");
    res.send(data);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error reading TXT file");
  }
});

app.get("/json", (req, res) => {
  const file_path = path.join(filesDir, "data.json");
  try {
    const data = JSON.parse(fs.readFileSync(file_path, "utf8"));
    res.json(data);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error reading JSON file");
  }
});

app.listen(3000, () => {
  console.log("Server B started on port 3000");
});
