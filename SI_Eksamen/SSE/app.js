const express = require("express");
const app = express();

// Route to handle SSE
app.get("/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Function to send events
  const sendEvent = () => {
    const eventData = `data: This is a server-sent event at ${new Date().toLocaleTimeString()}\n\n`;
    res.write(eventData);
  };

  // Send an initial event
  sendEvent();

  // Send periodic events every 2 seconds
  const intervalId = setInterval(sendEvent, 2000);

  // Close the connection when the client disconnects
  req.on("close", () => {
    clearInterval(intervalId);
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
