const { WebhookClient } = require("dialogflow-fulfillment");
const nodemailer = require("nodemailer");

require("dotenv").config();

module.exports = async (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });

  function hi(agent) {
    agent.add("Hello from Vercel-deployed webhook!");
    return Promise.resolve();
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

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    await transporter.sendMail({
      from: '"Ahmed Noorani" <ahmednoorani258@gmail.com>',
      to: project_contact,
      subject: "Thanks for your submission",
      html: `<p>Project: ${project_name}</p><p>Domain: ${project_domain}</p>`,
    });

    agent.add("Thanks! Ahmed will review your project soon.");
  }

  let intentMap = new Map();
  intentMap.set("Default Welcome Intent", hi);
  intentMap.set("Project Discussion Intent", projectdetails);

  agent.handleRequest(intentMap);
};
