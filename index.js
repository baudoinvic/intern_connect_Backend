const express = require("express");
const cors = require("cors");

const app = express();

// Import user routes
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(cors()); 

// Use the user routes 
app.use("/api", userRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
