import "./lib/db";
import express from "express";
import urlRoutes from "./routes/url";


var cors = require('cors')
const app = express();
const port = process.env.PORT || 3333;
app.use(cors())
app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ message: "" });
});

app.use("/", urlRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
