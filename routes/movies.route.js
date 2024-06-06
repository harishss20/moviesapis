//CRUD function
import express from "express";

const router = express.Router();

//reading
router.get("/movies", (req, res) => {
  res.send("This is get Method");
});

//creating
router.post("/movies", (req, res) => {
  res.send("This is post Method");
});

//updating
router.put("/movies/:id", (req, res) => {
  res.send("This is put method");
});

//delete
router.delete("/movies/:id", (req, res) => {
  res.send("this is delete method");
});

export default router;
