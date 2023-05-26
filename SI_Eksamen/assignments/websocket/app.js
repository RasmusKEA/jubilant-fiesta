const WebSocket = require("ws");

// netstat -vanp tcp | grep 8080
// CLEAR WHAT EVER RUNS ON PORT 8080 OR CHANGE PORT

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 8080 });

// WebSocket connection event handler
wss.on("connection", (ws) => {
  // WebSocket message event handler
  ws.on("message", (message) => {
    console.log("Received message:", message.toString());

    // Echo the received message back to the client
    ws.send(`Server echoing back: ${message}`);
  });

  // WebSocket close event handler
  ws.on("close", () => {
    console.log("WebSocket connection closed");
  });
});

console.log("WebSocket server started on port 8080");
