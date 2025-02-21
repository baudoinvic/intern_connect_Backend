const express = require("express");

const app = express();

const userRoutes = require("./routes/userRoutes");

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api", userRoutes);
// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
