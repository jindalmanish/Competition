const logger = (req, res, next) => {
    console.log("Title:", req.title);
    console.log("Author:  ", req.author);
    console.log("Genre:  ", req.genre);
    console.log("-----");
    next();
  };
  
  module.exports = logger;