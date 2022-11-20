const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello from the home us page</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>Hello from the about us page</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Hello from the contact us page</h1>");
});
app.get("/feedback", (req, res) => {
  res.send("<h1>Hello from the feedback us page</h1>");
});

app.listen(5000, () => {
  console.log(`server running on the localhost 5000`);
});
