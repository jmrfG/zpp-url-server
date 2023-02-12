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