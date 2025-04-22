import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOption {
  expiresIn?: string | number;
}
const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: "1h",
};
export const generateToken = (
  payload: JwtPayload,
  options: SignOption = DEFAULT_SIGN_OPTION
) => {
  console.log(">>>process.env.SECRET>>", process.env.SECRET);
  let secret = process.env.SECRET;
  const token = jwt.sign(payload, secret!, options);

  return token;
};
