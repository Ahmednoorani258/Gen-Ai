const { WebhookClient } = require('dialogflow-fulfillment');
const nodemailer = require('nodemailer');

// ✅ Setup email transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// ✅ Vercel-compatible API function
module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const agent = new WebhookClient({ request: req, response: res });

    // 👋 Welcome intent
    function hi(agent) {
      agent.add("Hello from Ahmed’s deployed webhook! How can I assist you?");
      return Promise.resolve();
    }

    // 📦 Project Discussion Intent
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

      // 🧠 Dialogflow response
      agent.add(`📌 Project: ${project_name}`);
      agent.add(`🧩 Features: ${project_features}`);
      agent.add(`💰 Budget: ${project_budget}`);
      agent.add("✅ Ahmed will review your project soon.");

      // 📧 Email content
      const htmlContent = `
        <p>Thanks for submitting your project! Ahmed will review it shortly.</p>
        <ul>
          <li><strong>Project:</strong> ${project_name}</li>
          <li><strong>Domain:</strong> ${project_domain}</li>
          <li><strong>Features:</strong> ${project_features}</li>
          <li><strong>Timeline:</strong> ${timeline}</li>
          <li><strong>Platform:</strong> ${project_platform}</li>
          <li><strong>Budget:</strong> ${project_budget}</li>
        </ul>
      `;

      try {
        const info = await transporter.sendMail({
          from: '"Ahmed" <ahmednoorani258@gmail.com>',
          to: project_contact,
          subject: "Thanks for your project submission",
          html: htmlContent,
        });
        console.log("✅ Email sent:", info.messageId);
      } catch (emailErr) {
        console.error("❌ Failed to send email:", emailErr);
      }
    }

    // 🎯 Intent map
    const intentMap = new Map();
    intentMap.set('Default Welcome Intent', hi);
    intentMap.set('Project Discussion Intent', projectdetails);

    await agent.handleRequest(intentMap);

  } catch (err) {
    console.error("❌ Webhook error:", err);
    return res.status(500).send("Internal Server Error");
  }
};
