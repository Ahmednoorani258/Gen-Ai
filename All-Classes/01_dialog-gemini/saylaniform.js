const dialogflow = require("@google-cloud/dialogflow");
const { WebhookClient, Suggestion } = require("dialogflow-fulfillment");
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config(); // 👈 Add this at the top of your file

const app = express();
app.use(express.json());
app.use(cors());

function randomnumbgn() {
  //generate 6 digit random number
  return Math.floor(Math.random() * 900000) + 100000;
}

const PORT = process.env.PORT || 8080;

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

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/webhook", async (req, res) => {
  var id = res.req.body.session.substr(43);
  console.log(id);
  const agent = new WebhookClient({ request: req, response: res });

  function hi(agent) {
    console.log((intent) => hi);
    agent.add("hello from server welcome");
  }

  function saylaniform(agent) {
    const { studentname, coursename, fathername, cnic ,email } = agent.parameters;
    agent.add(
    `name:${studentname} fathername: ${fathername} cnic: ${cnic} coursename: ${coursename} email: ${email} 
    Your form has been submitted successfully! and card was sent to the given email` 
    );
    (async () => {
      try {
        const info = await transporter.sendMail({
          from: '"ahmednoorani" <ahmednoorani258@gmail.com>',
          to: email,
          subject: "Hello ✔",
          // text: "Hello world?", // plain‑text body
          html: `<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f0f2f5; padding: 30px;">
  <table align="center" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 600px; margin: auto;">
    <tr>
      <!-- Front Side -->
      <td style="vertical-align: top; padding: 10px;">
        <div style="width: 100%; max-width: 270px; height: 420px; border-radius: 12px; overflow: hidden; border: 1px solid #ccc; background: #fff; box-shadow: 0 4px 20px rgba(0,0,0,0.1); margin: auto;">
          <div style="width: 100%; height: 60px; background: linear-gradient(90deg, #004aad, #45c62d);"></div>
          <div style="text-align: center; margin-top: -30px;">
            <img src="https://api.dicebear.com/7.x/initials/png?seed=${encodeURIComponent(studentname)}" alt="Profile" style="width: 100px; height: 100px; border-radius: 50%; border: 3px solid #004aad; background: #fff;">
            <h2 style="margin: 10px 0 5px; font-size: 18px; color: #004aad;">${studentname}</h2>
            <p style="font-size: 14px; color: #555;">${coursename}</p>
            <p style="font-weight: bold; margin-top: 5px; color: #222;">GD-${randomnumbgn()}</p>
          </div>
          <div style="margin-top: auto; width: 100%; text-align: center; background: #e5f2ff; padding: 10px; font-size: 12px; font-weight: bold; color: #004aad;">
            SAYLANI MASS IT TRAINING PROGRAM
          </div>
          <div style="width: 100%; height: 30px; background: linear-gradient(to right, #004aad, #45c62d);"></div>
        </div>
      </td>

      <!-- Back Side -->
      <td style="vertical-align: top; padding: 10px;">
        <div style="width: 100%; max-width: 270px; height: 420px; border-radius: 12px; overflow: hidden; border: 1px solid #ccc; background: #fff; box-shadow: 0 4px 20px rgba(0,0,0,0.1); margin: auto;">
          <div style="width: 100%; height: 60px; background: linear-gradient(90deg, #004aad, #45c62d);"></div>
          <div style="padding: 20px; font-size: 14px; color: #333;">
            <p><strong>Name:</strong> ${studentname}</p>
            <p><strong>Father's Name:</strong> ${fathername}</p>
            <p><strong>CNIC:</strong> ${cnic}</p>
            <p><strong>Course:</strong> ${coursename}</p>
            <div style="text-align: center; margin-top: 20px;">
              <img src="https://api.qrserver.com/v1/create-qr-code/?data=SMIT&size=100x100" alt="QR Code" style="border: 1px solid #ccc; padding: 5px;">
            </div>
            <p style="font-size: 11px; margin-top: 15px; text-align: center; color: #666;"><strong>Note:</strong> This card is valid only within SMIT premises. Please return if found.</p>
          </div>
          <div style="width: 100%; height: 30px; background: linear-gradient(to right, #004aad, #45c62d); text-align: center; color: white; font-size: 12px; line-height: 30px;">
            Issuing Authority - SMIT
          </div>
        </div>
      </td>
    </tr>
  </table>
</body>
`, // HTML body
        });
        console.log("Message sent:", info.messageId);
      } catch (error) {
        console.error("Error sending email:", error);
      }
    })();
  }
  // Wrap in an async IIFE so we can use await.

  let intentMap = new Map();
  intentMap.set("Default Welcome Intent", hi);
  intentMap.set("saylani form", saylaniform);
  agent.handleRequest(intentMap);
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
