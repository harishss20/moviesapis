import express from "express";

const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.json({
    msg: "Hello world!",
  });
});

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
