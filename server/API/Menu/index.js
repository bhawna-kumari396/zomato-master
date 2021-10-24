//libraries

import express from "express";

//database Model

import { MenuModel } from "../../database/allModels";

const Router = express.Router();

/* Route:    /r
desc:         get all menu of a particular restaurant 
params:       _id
Access:        public
Method:       GET
*/
