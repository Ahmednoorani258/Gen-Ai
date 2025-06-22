const { WebhookClient } = require("dialogflow-fulfillment");
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// 🚀 Serverless Function Export for Vercel
module.exports = async (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });

  async function hi(agent) {
    agent.add("Hello from the deployed Vercel webhook!");
  }

  async function projectdetails(agent) {
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

    agent.add(`
📌 Project: ${project_name}
📂 Domain: ${project_domain}
🧩 Features: ${project_features}
🗓 Timeline: ${timeline}
🖥 Platform: ${project_platform}
💰 Budget: ${project_budget}
📧 Contact: ${project_contact}
✅ Ahmed will review your project soon.
    `);

    try {
      await transporter.sendMail({
        from: '"Ahmed Noorani" <ahmednoorani258@gmail.com>',
        to: project_contact,
        subject: "Thanks for your project details",
        html: `
          <p>Thanks! Ahmed will review your project soon.</p>
          <p><strong>Project Name:</strong> ${project_name}</p>
          <p><strong>Domain:</strong> ${project_domain}</p>
          <p><strong>Features:</strong> ${project_features}</p>
          <p><strong>Timeline:</strong> ${timeline}</p>
          <p><strong>Platform:</strong> ${project_platform}</p>
          <p><strong>Budget:</strong> ${project_budget}</p>
          <p><strong>Contact:</strong> ${project_contact}</p>
        `,
      });
      console.log("✅ Email sent to", project_contact);
    } catch (error) {
      console.error("❌ Email error:", error);
      agent.add("There was an issue sending your email.");
    }
  }

  let intentMap = new Map();
  intentMap.set("Default Welcome Intent", hi);
  intentMap.set("Project Discussion Intent", projectdetails);

  await agent.handleRequest(intentMap);
};
