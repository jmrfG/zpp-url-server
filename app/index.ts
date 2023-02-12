import "./lib/db";
import express from "express";
import urlRoutes from "./routes/url";
import { IURL, URLModel } from "./models/urls";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));
app.set('view engine', 'ejs')

app.get("/", async (req, res) => {
  const urls: IURL[] = await URLModel.find().exec();
  res.render("index", {urls: urls})
});

app.use("/urls", urlRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
