const isProduction = process.env.NODE_ENV === "production";
const PORT = isProduction ? 7500 : 3000;

module.exports = {
  PORT,
  url: "mongodb://localhost:27017/easy-notes",
};
