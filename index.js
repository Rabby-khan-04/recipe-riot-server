const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

const chefs = require("./data/chefs.json");
const recipes = require("./data/recipes.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(
    "Yippee! RecipeRiot's server is fired up and ready to go! Let's whip up some mouthwatering madness!"
  );
});

app.listen(port, () => {
  console.log(`Hot diggity dog! Our server is up and running on port ${port}!`);
});
