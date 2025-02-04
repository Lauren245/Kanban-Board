import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // DONE: verify the token exists and add the user data to the request object
  const authHeader = req.headers.authorization;

  if(!authHeader){
    return res.status(401).json({ message: "Unauthorized: No token provided" });

  }else{
    const token = authHeader.split(' ')[1];

    const secretKey = process.env.JWT_SECRET_KEY || '';

    jwt.verify(token, secretKey, (err, user) => {
      if(err){
        return res.status(403).json({message: "Forbidden. Invalid Token"});
      }
      
      req.user = user as JwtPayload;
      return next();
    });
    return;
  }
};
