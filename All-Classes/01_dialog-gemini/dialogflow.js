const { WebhookClient } = require('dialogflow-fulfillment');
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post("/webhook", (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });

  function hi(agent) {
    console.log(`intent  =>  hi`);
    agent.add("Hello there!");
    return Promise.resolve();
  }

  function projectdetails(agent) {
    console.log("✅ Intent: project-details");
    console.log("📦 Parameters:", agent.parameters);

    const {
      project_name,
      project_domain,
      project_features,
      project_timeline,
      project_platform,
      project_budget,
      project_contact
    } = agent.parameters;

    const timeline = project_timeline?.amount && project_timeline?.unit
      ? `${project_timeline.amount} ${project_timeline.unit}`
      : "Not specified";

    const response = `
📌 Project Name: ${project_name}
📂 Domain: ${project_domain}
🧩 Features: ${project_features}
🗓 Timeline: ${timeline}
🖥 Platform: ${project_platform}
💰 Budget: ${project_budget || "Not specified"}
📧 Contact: ${project_contact || "Not provided"}

✅ Thanks! Ahmed will review your project soon.`;

    agent.add(response);
    return Promise.resolve(); // 🔥 Important!
  }

  const intentMap = new Map();
  intentMap.set('Default Welcome Intent', hi);
  intentMap.set('Project Discussion Intent', projectdetails);

  agent.handleRequest(intentMap);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
