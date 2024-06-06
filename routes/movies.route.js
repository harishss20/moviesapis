//CRUD function
import express from "express";
import {
  movieCreate,
  movieDelete,
  movieDetail,
  movieIndex,
  movieUpdate,
} from "../controllers/movies.controllers.js";

const router = express.Router();

//reading
router.get("/", movieIndex);

router.get("/:id", movieDetail);

//creating
router.post("/", movieCreate);

//updating
router.put("/:id", movieUpdate);

//delete
router.delete("/:id", movieDelete);

export default router;
