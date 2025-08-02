const dialogflow = require("@google-cloud/dialogflow");
const { WebhookClient, Suggestion } = require("dialogflow-fulfillment");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const runGeminiChat = require("./services/gemini");
const { MongoClient } = require("mongodb"); // <-- Add this line
const app = express();
app.use(express.json());
app.use(cors());

const uri = process.env.DB_URL; // Change this to your MongoDB URI if needed
const client = new MongoClient(uri);

let db;
client.connect()
  .then(() => {
    db = client.db("dialogflowDB"); // Use your DB name
    console.log("Connected to MongoDB");
  })
  .catch(err => {
    console.error("Failed to connect to MongoDB", err);
  });

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/webhook" ,async (req, res) => {
  var id = (res.req.body.session).substr(43);
  const agent = new WebhookClient({ request: req, response: res });
    console.log(id)
  function hi(agent) {
    console.log(`intent  =>  hi`);
    agent.add("hello from server");
  }

  function lead(agent) {
    console.log(`intent  =>  lead`);
    // const { name, phone, email } = agent.parameters;
    agent.add(`Lead added successfully`)

    // Save to MongoDB
    // if (db) {
    //   db.collection("leads").insertOne({ name, phone, email, timestamp: new Date() })
    //     .then(result => {
    //       console.log("Lead saved to MongoDB", result.insertedId);
    //     })
    //     .catch(err => {
    //       console.error("Error saving lead to MongoDB", err);
    //     });
    // } else {
    //   console.error("No MongoDB connection");
    // }

  }
  
  async function fallback(agent) {
    try {
      const action = req.body.queryResult.action;
      const queryText = req.body.queryResult.queryText;

      if (action === "input.unknown") {
        const response = await runGeminiChat(queryText);
        agent.add(response);
        console.log("Gemini:", response);
      } else {
        agent.add("Sorry, I couldn't understand. Please rephrase.");
      }
    } catch (err) {
      console.error("Fallback error:", err);
      agent.add("There was a problem getting a response. Please try again.");
    }
  }

  let intentMap = new Map();
  intentMap.set("Default Welcome Intent", hi);
  intentMap.set('get user details', lead);
//   intentMap.set("Default Fallback Intent", fallback);
  agent.handleRequest(intentMap);
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});