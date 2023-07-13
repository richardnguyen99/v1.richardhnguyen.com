import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";

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

  console.log("headers", req.headers);
  console.log("body", req.body);

  console.log("SMTP_HOST", process.env.SMTP_HOST);
  console.log("STMTP_PORT", process.env.SMTP_PORT);

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(req.body);
};

export default formHandler;
