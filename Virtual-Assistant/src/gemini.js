let api_key="AIzaSyBISbLMHNaptfpuckNPcOTszHQDOkrnXgQ"
AIzaSyBISbLMHNaptfpuckNPcOTszHQDOkrnXgQ
const fetch = require("node-fetch");

const apiKey = "YOUR_API_KEY";
const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + apiKey;

const headers = {
  "Content-Type": "application/json"
};

const body = {
  contents: [{
    parts: [{
      text: "Write a joke about JavaScript developers"
    }]
  }]
};

fetch(url, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(body)
})
  .then(res => res.json())
  .then(data => {
    console.log("Response:", data.candidates[0].content.parts[0].text);
  })
  .catch(err => console.error("Error:", err));