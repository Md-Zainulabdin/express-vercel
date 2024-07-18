import cors from "cors"; // Cross-Origin Resource Sharing
import express, { Request, Response } from "express";

const app = express();

// Middleware configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route handling
app.get("/", (req: Request, res: Response) => {
  // Send a response to the client
  res.send("Hello, TypeScript + Node.js + Express!");
});

// Import Routes
import userRoutes from "./routes/user.routes";

app.use("/api/v1/users", userRoutes);

export default app;
