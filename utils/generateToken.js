import "dotenv/config";
import jwt from "jsonwebtoken";

const accessTokenSecret = process.env.ACCESS_TOKEN;
const refreshTokenSecret = process.env.REFRESH_TOKEN;

export function generateAccessToken(username) {
    return jwt.sign(username, accessTokenSecret, { expiresIn: '1800s' });
}
  
export function generateRefreshToken(username) {
    return jwt.sign(username, refreshTokenSecret);
  }

