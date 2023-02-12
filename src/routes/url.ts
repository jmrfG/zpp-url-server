import { Router } from "express";
import { IURL, URLModel } from "../models/urls";

const routes = Router();

routes.get("/all", async (req, res) => {
    try {
        const urls: IURL[] = await URLModel.find().exec();
        return res.json(urls);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Sorry, something went wrong :/" });
      }
})

routes.post("/shorten", async(req,res)=> {
    try {
        const url: IURL = req.body;
    
        const countryExists = await URLModel.findOne({
          shortUrl: url.shortUrl,
        }).exec();
    
        if (countryExists) {
          return res
            .status(409)
            .json({ error: "There is already another url with this path" });
        }
    
        const newUrl = await URLModel.create(url);
        return res.status(201).json(newUrl);
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Sorry, something went wrong :/" });
      }
})

export default routes;