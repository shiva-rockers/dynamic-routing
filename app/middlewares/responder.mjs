export const responderMiddleware = (_, res, next) => {
    res.reply = ({ code, message }, data = {}) => {
        res.status(code).json({ message, data });
    };
    next();
};