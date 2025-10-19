const express = require("express");
const path = require("path");
const app = express();

// Gjør public-mappen tilgjengelig for frontend
app.use(express.static(path.join(__dirname, "public")));

// Generell route for index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveren kjører på http://localhost:${PORT}`);
});
