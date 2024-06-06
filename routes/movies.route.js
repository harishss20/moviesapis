//CRUD function
import express from "express";

const router = express.Router();

//reading
router.get("/", (req, res) => {
  res.send("This is get Method");
});

//creating
router.post("/", (req, res) => {
  res.send("This is post Method");
});

//updating
router.put("/:id", (req, res) => {
  res.send("This is put method");
});

//delete
router.delete("/:id", (req, res) => {
  res.send("this is delete method");
});

export default router;
