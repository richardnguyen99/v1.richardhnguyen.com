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
  console.log("headers", req.headers);
  console.log("body", req.body);

  res.status(200);
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(req.body);
};

export default formHandler;
