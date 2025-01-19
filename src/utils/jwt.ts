import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || ""

// Generate JWT token
export const generateToken = (payload: object, expiresIn: string = "1h"): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn });
};

export const verifyToken = (token: string): any => {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      throw new Error("Invalid or expired token");
    }
  };
  