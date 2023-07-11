import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";

const formHandler = (
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) => {
  console.log("formHandler", req.body);
  res.json("ok");
};

export default formHandler;
