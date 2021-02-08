const { query } = require("express");
const mongoose = require("mongoose");
const herosSchema = require("./heros.model");

herosSchema.statics = {
  create: function (data, cb) {
    const hero = new this(data);
    hero.save(cb);
  },

  get: function (query, cb) {
    this.find(query, cb);
  },

  getByName: function (query, cb) {
    this.find(query, cb);
  },

  update: function (query, updateData, cb) {
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  },

  delete: function (query, cb) {
    this.findOneAndDelete(query, cb);
  },
};

const herosModel = mongoose.model("Heors", herosSchema);
module.exports = herosModel;
