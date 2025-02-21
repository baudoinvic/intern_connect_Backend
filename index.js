const express = require("express");

const app = express();

const userRoutes = require("./routes/userRoutes");

// Middleware
app.use(express.json());
app.use("/api", userRoutes); 

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
