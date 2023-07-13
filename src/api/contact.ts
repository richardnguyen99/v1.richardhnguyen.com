import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
import nodemailer from "nodemailer";

type IFormData = {
  fullName: string;
  email: string;
  message: string;
};

const formHandler = (
  req: GatsbyFunctionRequest<IFormData>,
  res: GatsbyFunctionResponse
) => {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_SENDER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

  transporter
    .sendMail({
      from: process.env.SMTP_SENDER,
      to: process.env.SMTP_EMAIL,
      subject: `New message from ${req.body.fullName} <${req.body.email}>`,
      text: req.body.message,
    })
    .then((info) => {
      console.log("Message sent: %s", info.messageId);

      res.status(200).json(req.body);
    })
    .catch((error) => {
      console.log(error.message);

      res.status(500).json({ error: error.message });
    });
};

export default formHandler;
