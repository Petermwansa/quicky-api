import rateLimit from "express-rate-limit";

export default rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30, // 30 requests per minute
  message: { error: "Too many requests, please try again later." }
});