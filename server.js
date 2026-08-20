const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});