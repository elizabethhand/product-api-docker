import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello!");
});
app.listen(5000, () => console.log("Server is up and running"));
