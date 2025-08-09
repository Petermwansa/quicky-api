import express from "express";
import morgan from "morgan";
import cors from "cors"
import rateLimit from "./middleware/rateLimit.js"
import quickyRoutes from "./routes/quicky.js"
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import { quickyData } from "./services/quickyService.js";


const app = express();

// here we connect to the mongodb db
dotenv.config();
connectDB();

//middleware 
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(rateLimit);


app.use("/api/quicky", quickyRoutes);



// Routes 
app.get("/", (req, res) => {
  res.send("Quicky Data Enrichment API is running");
});

app.get("/enrich", async (req, res) => {
  const inputData = {
    name: "Softacorn",
    location: "Saint Petersburg"
  };

  const enriched = await quickyData(inputData);
  res.json(enriched);
});


export default app;
