const { WebhookClient } = require('dialogflow-fulfillment');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Vercel-style function export
module.exports = async (req, res) => {
  // 🚫 Block GET requests
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const agent = new WebhookClient({ request: req, response: res });

    function hi(agent) {
      agent.add("Hello from deployed Vercel webhook!");
      return Promise.resolve();
    }

    function projectdetails(agent) {
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

      agent.add(`📌 Project: ${project_name}, 🧩 Features: ${project_features}, 💰 Budget: ${project_budget}`);
      
      return transporter.sendMail({
        from: '"Ahmed" <ahmednoorani258@gmail.com>',
        to: project_contact,
        subject: "Thanks for your project submission",
        html: `<p>Thanks! Ahmed will review your project soon.</p>
        <p><strong>Project:</strong> ${project_name}</p>
        <p><strong>Domain:</strong> ${project_domain}</p>
        <p><strong>Features:</strong> ${project_features}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Platform:</strong> ${project_platform}</p>
        <p><strong>Budget:</strong> ${project_budget}</p>`
      }).then(info => {
        console.log("✅ Email sent:", info.messageId);
      }).catch(err => {
        console.error("❌ Email failed:", err);
      });
    }

    const intentMap = new Map();
    intentMap.set('Default Welcome Intent', hi);
    intentMap.set('Project Discussion Intent', projectdetails);

    await agent.handleRequest(intentMap);

  } catch (error) {
    console.error("Webhook Error:", error);
    return res.status(500).send("Internal Server Error");
  }
};
