import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    // DONE: verify the token exists and add the user data to the request object
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
    else {
        const token = authHeader.split(' ')[1];
        const secretKey = process.env.JWT_SECRET_KEY || '';
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Forbidden. Invalid Token" });
            }
            req.user = user;
            return next();
        });
        return;
    }
};
