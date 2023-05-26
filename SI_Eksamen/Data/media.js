const express = require("express");
const fs = require("fs");
const path = require("path");
const base64 = require("base64-js");

const app = express();

// Read the image file
const imagePath = path.join(__dirname, "/static/image.jpeg");
const imageData = fs.readFileSync(imagePath);

// Encode the image data in base64
const encodedImage = base64.fromByteArray(imageData);

// Set up a route to serve the HTML page
app.get("/", (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Base64 Encoded Image</title>
    </head>
    <body>
      <h1>Base64 Encoded Image</h1>
      <img src="data:image/jpeg;base64,${encodedImage}" alt="Encoded Image">
    </body>
    </html>
  `;
  res.send(html);
});

app.get("/youtube", (req, res) => {
  const html = `<!DOCTYPE html>
    <html>
    <head>
      <title>Embedded YouTube Video</title>
    </head>
    <body>
      <h1>Embedded YouTube Video</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/TlB_eWDSMt4" frameborder="0" allowfullscreen></iframe>
    </body>
    </html>
    `;

  res.send(html);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
