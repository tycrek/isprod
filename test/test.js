const isProd = require('../isprod2')(!!process.env.STRICT);
console.log(`Production environment: ${isProd}`);
