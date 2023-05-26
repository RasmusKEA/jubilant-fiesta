const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer({ dest: "uploads/" });

// Serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Handle file upload
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    res.status(400).send("No file uploaded");
    return;
  }

  // Access the uploaded file using req.file
  const filename = req.file.filename;

  // Do something with the uploaded file (e.g., save it, process it, etc.)

  res.send(`File uploaded succesfully: ${filename}`);
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
