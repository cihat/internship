const Heros = require("./heros.controller");

module.exports = (router) => {
  router.post("/create", Heros.createHero);
  router.get("/get", Heros.getHeros);
  router.get("/get:name", Heros.getHero);
  router.put("/update:id", Heros.updateHero);
  router.delete("/delete:id", Heros.removeHero);
};
