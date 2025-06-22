const dialogflow = require("@google-cloud/dialogflow");
const { WebhookClient, Suggestion } = require("dialogflow-fulfillment");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config(); // 👈 Add this at the top of your file


const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
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

    (async () => {
      try {
        const info = await transporter.sendMail({
          from: '"ahmednoorani" <ahmednoorani258@gmail.com>',
          to: project_contact,
          subject: "Thank your for reaching us",
          // text: "Hello world?", // plain‑text body
          // also i want to add thanks your msg with given details
          text: `Thanks! Ahmed will review your project soon.\n\nProject Name: ${project_name}\nDomain: ${project_domain}\nFeatures: ${project_features}\nTimeline: ${timeline}\nPlatform: ${project_platform}\nBudget: ${project_budget || "Not specified"}\nContact: ${project_contact || "Not provided"}`,
          // HTML body we need to send professional thanks msg with details 
          html: `
            <p>Thanks! Ahmed will review your project soon.</p>
            <p><strong>Project Name:</strong> ${project_name}</p>
            <p><strong>Domain:</strong> ${project_domain}</p>
            <p><strong>Features:</strong> ${project_features}</p>
            <p><strong>Timeline:</strong> ${timeline}</p>
            <p><strong>Platform:</strong> ${project_platform}</p>
            <p><strong>Budget:</strong> ${project_budget || "Not specified"}</p>
            <p><strong>Contact:</strong> ${project_contact || "Not provided"}</p>
          `, // HTML body
        });
        console.log("Message sent:", info.messageId);
      } catch (error) {
        console.error("Error sending email:", error);
      }
    })();
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
