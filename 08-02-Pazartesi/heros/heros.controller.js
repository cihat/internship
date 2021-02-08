const Heros = require("./heros.dao");

createHero = (req, res, next) => {
  const hero = {
    name: req.body.name,
    description: req.body.description,
  };

  Heros.create(hero, (err, hero) => {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "Hero created successfully",
    });
  });
};

getHeros = (req, res, next) => {
  Heros.get({}, (err, heros) => {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      heros: heros,
    });
  });
};

getHero = (req, res, next) => {
  Heros.get({ name: req.params.name }, (err, heros) => {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      heros: heros,
    });
  });
};

updateHero = (req, res, next) => {
  const hero = {
    name: req.body.name,
    description: req.body.description,
  };
  Heros.update({ _id: req.params.id }, (err, hero) => {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "Hero updated successfully",
    });
  });
};

removeHero = function (req, res, next) {
  Heros.delete({ _id: req.params.id }, function (err, hero) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "Hero deleted successfully",
    });
  });
};

module.exports = {
  createHero,
  getHeros,
  getHero,
  updateHero,
  removeHero,
};
