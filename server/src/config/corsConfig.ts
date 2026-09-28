import "dotenv/config";
import cors from "cors";

const corsConfig = cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
});

export default corsConfig;
