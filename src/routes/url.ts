import { Router } from "express";
import { IURL, URLModel } from "../models/urls";
import { generate } from 'shortid';

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

routes.get('/:code', async (req, res) => {
    try {
        const url = await URLModel.findOne({ urlCode: req.params.code })
        if (url) {
            return res.redirect(url.originalUrl)
        }
        else {
            return res.status(404).json('No URL Found')
        }

    }
    catch (err) {
        console.error(err)
        res.status(500).json('Server Error')
    }
})

routes.post("/shorten", async (req, res) => {
    try {
        const url: IURL = req.body;
        console.log("DEBUG:", url);
        const countryExists = await URLModel.findOne({
            originalUrl: url.originalUrl,
        }).exec();

        if (countryExists) {
            return res
                .status(409)
                .json({ error: "There is already another url with this path" });
        }


        let urlCode = generate()
        let shortUrl = "zpp.sh" + "/" + urlCode
        const newUrl = await URLModel.create({
            originalUrl: url.originalUrl,
            shortUrl: shortUrl,
            isValid: true,
            dateOfCreation: new Date().getTime()
        });

        return res.status(201).json(newUrl);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Sorry, something went wrong :/" });
    }
})

export default routes;