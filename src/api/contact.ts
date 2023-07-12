import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";

const formHandler = (
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) => {
  console.log("headers", req.headers);
  console.log("body", req.body);

  res.send(req.body);
};

export default formHandler;
