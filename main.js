import express from "express";
import movieRoute from "./routes/movies.route.js";
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.json({
    msg: "Hello world!!!!",
  });
});

app.use("/movies", movieRoute);

app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`);
});
