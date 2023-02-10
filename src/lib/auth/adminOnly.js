import createHttpError from "http-errors";

export const adminOnlyMiddleware = (req, res, next) => {
  if (req.user.role === "Host") {
    req.user.isHost = true;
    next();
  } else {
    next(createHttpError(403, "Host only endpoint!"));
  }
};
