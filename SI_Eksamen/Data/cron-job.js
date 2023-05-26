const fs = require("fs");
const path = require("path");
const cron = require("node-cron");

// Set the file path
const filePath = path.join(__dirname, "/static/output.txt");

// Define the content to be echoed
const content = {
  characters: "A",
  word: "Hello",
  line: "This is a line of text.",
  string: "Example string",
};

// Schedule the task to run every minute
//0 * * * * for every hour
// "* * * * *" for every min
cron.schedule("*/10 * * * * *", () => {
  // Choose the content to be echoed (e.g., characters, word, line, or string)
  const selectedContent = content.line;

  // Append the selected content to the file
  fs.appendFile(filePath, selectedContent + "\n", (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("Content echoed to file:", selectedContent);
    }
  });
});
