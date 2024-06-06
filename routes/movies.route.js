//CRUD function
import express from "express";
import {
  movieCreate,
  movieDelete,
  movieIndex,
  movieUpdate,
} from "../controllers/movies.controllers.js";

const router = express.Router();

//reading
router.get("/", movieIndex);

//creating
router.post("/", movieCreate);

//updating
router.put("/:id", movieUpdate);

//delete
router.delete("/:id", movieDelete);

export default router;
