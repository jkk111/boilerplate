import express from "express";

const router = express.Router();

if (process.env.NODE_ENV === "development") {
  router.use(express.static(__dirname));
}

export default router;
