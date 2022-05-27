if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    module.exports = require('./dist/coochi.js');
  } else {
    module.exports = require('./dist/coochi.min.js');
  }