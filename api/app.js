import cors from 'cors'; // Cross-Origin Resource Sharing
import express from 'express';

const app = express();

// Middleware configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route handling
app.get('/', (req, res) => {
  res.send('Hello from server');
});


// Import Routes
import userRoutes from "./routes/user.routes.js"

app.use("/api/v1/users", userRoutes)

export default app