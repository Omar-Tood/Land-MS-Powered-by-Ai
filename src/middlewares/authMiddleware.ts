import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

interface request{
    user?: any;
}

export const protect = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Not authorized, no token" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token);
    req.user = decoded; // Attach decoded payload to request object
    next();
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};
