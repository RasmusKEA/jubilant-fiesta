const express = require("express");
const axios = require("axios");
const FormData = require("form-data");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/send-sms", async (req, res) => {
  try {
    const { key, message, number } = req.body;

    const formData = new FormData();
    formData.append("user_api_key", key);
    formData.append("sms_message", message);
    formData.append("sms_to_phone", number);

    const response = await axios.post(
      "https://fiotext.com/send-sms",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // Forward the response from the API to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    // Handle any errors that occur during the request
    res.status(500).json({ error: error.message });
  }
});

const port = 3000; // Specify the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
