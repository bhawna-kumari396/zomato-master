//Libraries

import express from "express";
//import passport from "passport";

//Database Model

import { FoodModel } from "../../database/allModels";

const Router = express.Router();

/* Route:    /
desc:         get all the food based on particular restaurant
Body:         _id
Access:        public
Method:       GET
*/

Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const foods = await FoodModel.find({ restaurant: _id });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/* Route:    /
desc:         get all the food based on particular category
Body:         category
Access:        public
Method:       GET
*/

Router.get("/r/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const foods = await FoodModel.find({
      category: { $regex: category, $options: "i" },
    });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
